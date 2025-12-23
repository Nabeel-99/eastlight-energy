"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { appliances } from "@/lib/utils";
import EnergyResultModal from "@/components/EnergyResultModal";
import EnergyCalculatorCard from "@/components/EnergyCalculatorCard";

const EnergyCalculator = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    propertyType: "",
    systemType: "",
    batteryType: "",
    appliances: [{ id: Date.now(), applianceId: "", wattage: 0, units: 1 }],
    backupHours: "",
    location: "",
  });

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addAppliance = () => {
    setFormData((prev) => ({
      ...prev,
      appliances: [
        ...prev.appliances,
        { id: Date.now(), applianceId: "", wattage: 0, units: 1 },
      ],
    }));
  };

  const removeAppliance = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      appliances: prev.appliances.filter((a) => a.id !== id),
    }));
  };

  const updateAppliance = (id: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      appliances: prev.appliances.map((a) =>
        a.id === id ? { ...a, [field]: value } : a
      ),
    }));
  };

  const handleApplianceSelect = (id: number, applianceId: string) => {
    const selectedAppliance = appliances.find((a) => a.id === applianceId);
    if (selectedAppliance) {
      updateAppliance(id, "applianceId", applianceId);
      updateAppliance(id, "wattage", selectedAppliance.wattage);
    }
  };

  const calculateResults = () => {
    const totalWattage = formData.appliances.reduce(
      (sum, a) => sum + a.wattage * a.units,
      0
    );
    const hours = Number(formData.backupHours) || 0;
    const totalWh = totalWattage * hours;

    // 1. Battery Capacity (Matches EcoFlux exactly)
    const dodFactor = formData.batteryType === "dry-cell" ? 2.0 : 1.25;
    const batteryCapacity = (totalWh / 1000) * dodFactor;

    // 2. Inverter Capacity (Matches EcoFlux 0.3kVA for 200W load)
    const inverterCapacity = Math.ceil((totalWattage * 1.25) / 100) / 10;

    // 3. Solar Capacity: The "Zone" Logic
    let solarCapacity: string | null = null;

    if (formData.systemType === "solar" && formData.location) {
      // ECOFLUX ZONE MAPPING
      const northernStates = [
        "bauchi",
        "borno",
        "kano",
        "katsina",
        "sokoto",
        "fct",
        "kaduna",
        "niger",
        "yobe",
        "zamfara",
        "kebbi",
        "adamawa",
        "gombe",
        "jigawa",
        "taraba",
      ];

      const isNorth = northernStates.includes(formData.location);

      let solarValue = 0;

      if (formData.batteryType === "dry-cell") {
        const regionalDivider = isNorth ? 8.9 : 7.65;
        solarValue = (batteryCapacity * 2.5) / regionalDivider;
      } else {
        const lithiumDivider = 6.25;
        solarValue = (batteryCapacity * 2.5) / lithiumDivider;
      }

      solarCapacity = solarValue.toFixed(3);
    }

    return {
      inverterCapacity: inverterCapacity.toFixed(1),
      batteryCapacity: batteryCapacity.toFixed(1),
      solarCapacity,
    };
  };

  const canCalculate = () => {
    const hasAppliances = formData.appliances.some((a) => a.applianceId !== "");
    const hasBackupHours =
      formData.backupHours !== "" && Number(formData.backupHours) > 0;

    if (formData.propertyType === "commercial") {
      return formData.batteryType !== "" && hasAppliances && hasBackupHours;
    }

    if (formData.systemType === "solar") {
      return (
        formData.batteryType !== "" &&
        hasAppliances &&
        hasBackupHours &&
        formData.location !== ""
      );
    }

    return (
      formData.systemType !== "" &&
      formData.batteryType !== "" &&
      hasAppliances &&
      hasBackupHours
    );
  };

  const handleCalculate = () => {
    if (canCalculate()) {
      setShowResults(true);
    }
  };

  const startOver = () => {
    setIsStarted(false);
    setShowResults(false);
    setFormData({
      propertyType: "",
      systemType: "",
      batteryType: "",
      appliances: [{ id: Date.now(), applianceId: "", wattage: 0, units: 1 }],
      backupHours: "",
      location: "",
    });
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const results = calculateResults();

  const isCommercial = formData.propertyType === "commercial";
  const showSystemType = formData.propertyType !== "" && !isCommercial;
  const showBatteryType = isCommercial
    ? formData.propertyType !== ""
    : formData.systemType !== "";
  const showAppliances = formData.batteryType !== "";
  const showBackupHours = formData.appliances.some((a) => a.applianceId !== "");
  const showLocation =
    formData.systemType === "solar" &&
    formData.backupHours !== "" &&
    Number(formData.backupHours) > 0;

  if (!isStarted) {
    return (
      <div className="min-h-screen bg-linear-to-b from-[#fff6f6] to-[#effffb] border pt-10 lg:pt-40">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center gap-6">
            <div className="h-[300px]">
              <img
                src="/solarsystem.webp"
                alt="Energy Calculator"
                className="w-full h-full aspect-square rounded-4xl object-cover"
              />
            </div>
            <p className="text-2xl font-bold">Energy Calculator</p>
            <p className="text-center lg:max-w-sm">
              We know you might not be sure about your energy needs or which
              products to buy. We're here to help!
            </p>
            <Button
              onClick={() => setIsStarted(true)}
              className="mt-4 p-6 font-bold text-xl"
            >
              Begin
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-linear-to-b from-[#fff6f6] to-[#effffb] pt-10 lg:pt-20">
      <EnergyCalculatorCard
        containerRef={containerRef}
        formData={formData}
        isCommercial={isCommercial}
        showSystemType={showSystemType}
        showBatteryType={showBatteryType}
        showAppliances={showAppliances}
        showBackupHours={showBackupHours}
        showLocation={showLocation}
        handleApplianceSelect={handleApplianceSelect}
        removeAppliance={removeAppliance}
        addAppliance={addAppliance}
        updateAppliance={updateAppliance}
        handleCalculate={handleCalculate}
        canCalculate={canCalculate}
        updateFormData={updateFormData}
      />

      {/* Results Modal */}
      <EnergyResultModal
        formData={formData}
        startOver={startOver}
        results={results}
        setShowResults={setShowResults}
        showResults={showResults}
      />
    </div>
  );
};

export default EnergyCalculator;
