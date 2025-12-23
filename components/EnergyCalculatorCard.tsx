import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import { Info, Plus, Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { appliances, nigeriaSolarMap } from "@/lib/utils";
import { FormData } from "@/lib/interface";
type EnergyCalculatorCardProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  formData: FormData;
  updateFormData: (key: string, value: any) => void;
  isCommercial: boolean;
  showSystemType: boolean;
  showBatteryType: boolean;
  showAppliances: boolean;
  showBackupHours: boolean;
  showLocation: boolean;
  handleApplianceSelect: (id: number, applianceId: string) => void;
  removeAppliance: (id: number) => void;
  addAppliance: () => void;
  updateAppliance: (applianceId: number, field: string, value: any) => void;
  handleCalculate: () => void;
  canCalculate: () => boolean;
};
const EnergyCalculatorCard = ({
  containerRef,
  formData,
  updateFormData,
  isCommercial,
  showSystemType,
  showBatteryType,
  showAppliances,
  showBackupHours,
  showLocation,
  handleApplianceSelect,
  removeAppliance,
  addAppliance,
  updateAppliance,
  handleCalculate,
  canCalculate,
}: EnergyCalculatorCardProps) => {
  return (
    <div ref={containerRef} className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="flex flex-col items-center gap-3">
        <p className="text-2xl font-bold">Energy Calculator</p>
        <p className="text-center">
          Answer the questions below to get your energy recommendations
        </p>
      </div>

      <Card className="mt-10 z-40 relative  ">
        <CardContent className="space-y-6 z-40">
          {/* Step 1: Property Type */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">1. Property</h3>
            <p className="text-gray-800">
              What kind of property are you looking to estimate for?
            </p>
            <RadioGroup
              value={formData.propertyType}
              onValueChange={(value) => updateFormData("propertyType", value)}
            >
              <div className="grid lg:grid-cols-2 w-full gap-4">
                <Label htmlFor="residential" className="cursor-pointer ">
                  <div className="flex items-center justify-between  w-full p-4 border  rounded-lg hover:bg-accent">
                    <span className="font-medium">Residential</span>
                    <RadioGroupItem
                      value="residential"
                      id="residential"
                      indicatorClassName="fill-black"
                      className="border-black/30 "
                    />
                  </div>
                </Label>
                <Label htmlFor="commercial" className="cursor-pointer">
                  <div className="flex items-center justify-between  w-full p-4 border rounded-lg hover:bg-accent">
                    <span className="font-medium">Commercial</span>
                    <RadioGroupItem
                      value="commercial"
                      id="commercial"
                      indicatorClassName="fill-black"
                      className="border-black/30 "
                    />
                  </div>
                </Label>
              </div>
            </RadioGroup>
            {isCommercial && (
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <p>
                    For commercial properties, please{" "}
                    <span>
                      {" "}
                      <a
                        href="/contact"
                        className="underline text-primary font-medium"
                      >
                        reach out to us here
                      </a>{" "}
                    </span>
                    for personalized consultation. You can still use this
                    calculator for a basic estimate.
                  </p>
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Step 2: System Type (Only for Residential) */}
          {showSystemType && (
            <>
              <Separator className="my-6" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">2. System</h3>
                <p className="text-gray-800">What system do you want?</p>
                <RadioGroup
                  value={formData.systemType}
                  onValueChange={(value) => updateFormData("systemType", value)}
                >
                  <div className="grid lg:grid-cols-2 gap-4">
                    <Label
                      htmlFor="inverter-battery"
                      className="cursor-pointer"
                    >
                      <div className="flex items-center justify-between w-full p-4 border rounded-lg hover:bg-accent">
                        <span className="font-medium">
                          Inverter & Battery System
                        </span>
                        <RadioGroupItem
                          value="inverter-battery"
                          id="inverter-battery"
                          indicatorClassName="fill-black"
                          className="border-black/30 "
                        />
                      </div>
                    </Label>
                    <Label htmlFor="solar" className="cursor-pointer">
                      <div className="flex items-center justify-between w-full p-4 border rounded-lg hover:bg-accent">
                        <span className="font-medium">
                          Inverter, Battery & Solar System
                        </span>
                        <RadioGroupItem
                          value="solar"
                          id="solar"
                          indicatorClassName="fill-black"
                          className="border-black/30 "
                        />
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          )}

          {/* Step 3: Battery Type */}
          {showBatteryType && (
            <>
              <Separator className="my-6" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  {isCommercial ? "2" : "3"}. Battery
                </h3>
                <p className="text-gray-800">What battery works for you?</p>
                <RadioGroup
                  value={formData.batteryType}
                  onValueChange={(value) =>
                    updateFormData("batteryType", value)
                  }
                >
                  <div className="grid lg:grid-cols-2 gap-4">
                    <Label htmlFor="dry-cell" className="cursor-pointer">
                      <div className="flex items-center justify-between w-full p-4 border rounded-lg hover:bg-accent">
                        <span className="font-medium">
                          Dry Cell/Tubular Battery
                        </span>
                        <RadioGroupItem
                          value="dry-cell"
                          id="dry-cell"
                          indicatorClassName="fill-black"
                          className="border-black/30 "
                        />
                      </div>
                    </Label>
                    <Label htmlFor="lithium" className="cursor-pointer">
                      <div className="flex items-center justify-between w-full p-4 border rounded-lg hover:bg-accent">
                        <span className="font-medium">Lithium Battery</span>
                        <RadioGroupItem
                          value="lithium"
                          id="lithium"
                          indicatorClassName="fill-black"
                          className="border-black/30 "
                        />
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
                <p className="text-sm text-justify text-gray-800">
                  Dry cell/Tubular batteries are reliable for backup power in
                  homes and offices, offering long-lasting performance but
                  requiring maintenance and longer charging times. Lithium
                  batteries are lightweight, charge quickly, and need no upkeep,
                  making them ideal for efficient, modern energy storage, though
                  at a higher cost.
                </p>
              </div>
            </>
          )}

          {/* Step 4: Appliances */}
          {showAppliances && (
            <>
              <Separator className="my-6" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  {isCommercial ? "3" : "4"}. Appliances
                </h3>
                <p className="text-gray-800">
                  What appliances would you want to power?
                </p>
                <p className="text-sm text-gray-800">
                  Please indicate the specific units and wattage of these
                  appliances for more accurate results.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-12 gap-2 text-sm font-medium text-gray-800">
                    <div className="col-span-5">Appliance</div>
                    <div className="col-span-3">Wattage (W)</div>
                    <div className="col-span-2">Unit(s)</div>
                    <div className="col-span-2">Total (W)</div>
                  </div>

                  {formData.appliances.map((appliance, index) => (
                    <div
                      key={appliance.id}
                      className="grid grid-cols-12 gap-2 items-center"
                    >
                      <div className="col-span-5">
                        <Select
                          value={appliance.applianceId}
                          onValueChange={(value) =>
                            handleApplianceSelect(appliance.id, value)
                          }
                        >
                          <SelectTrigger className="border border-black/10 focus-visible:border-black/10 focus-visible:ring-black/10">
                            <SelectValue placeholder="Select appliance" />
                          </SelectTrigger>
                          <SelectContent>
                            {appliances.map((app) => (
                              <SelectItem
                                key={app.id}
                                value={app.id}
                                className=" focus:bg-black/10 focus:text-black/80"
                              >
                                {app.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-3">
                        <Input
                          type="number"
                          value={appliance.wattage}
                          onChange={(e) =>
                            updateAppliance(
                              appliance.id,
                              "wattage",
                              Number(e.target.value)
                            )
                          }
                          className="text-center border border-black/10 focus-visible:border-black/10 focus-visible:ring-black/10 "
                        />
                      </div>
                      <div className="col-span-2">
                        <Input
                          type="number"
                          min="1"
                          value={appliance.units}
                          onChange={(e) =>
                            updateAppliance(
                              appliance.id,
                              "units",
                              Number(e.target.value)
                            )
                          }
                          className="text-center border border-black/10 focus-visible:border-black/10 focus-visible:ring-black/10 "
                        />
                      </div>
                      <div className="col-span-1 text-center font-medium">
                        {appliance.wattage * appliance.units}
                      </div>
                      <div className="col-span-1">
                        {formData.appliances.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeAppliance(appliance.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={addAppliance}
                  className="w-full"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Appliance
                </Button>
              </div>
            </>
          )}

          {/* Step 5: Backup Duration */}
          {showBackupHours && (
            <>
              <Separator className="my-6" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  {isCommercial ? "4" : "5"}. Backup duration
                </h3>
                <p className="text-gray-800">
                  How many hours of backup power would you require before
                  needing to be recharged?
                </p>
                <div className="space-y-2">
                  <Label htmlFor="backup-hours">Hours</Label>
                  <Input
                    id="backup-hours"
                    type="number"
                    min="0"
                    placeholder="Enter backup hours (e.g., 5, 12, 24)"
                    value={formData.backupHours}
                    onChange={(e) =>
                      updateFormData("backupHours", e.target.value)
                    }
                    className=" border border-black/10 focus-visible:border-black/10 focus-visible:ring-black/10 "
                  />
                </div>
              </div>
            </>
          )}

          {/* Step 6: Location (only for solar systems) */}
          {showLocation && (
            <>
              <Separator className="my-6" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">6. Location</h3>
                <p className="text-gray-800">What state are you located in?</p>
                <Select
                  value={formData.location}
                  onValueChange={(value) => updateFormData("location", value)}
                >
                  <SelectTrigger className="border border-black/10 w-full focus-visible:border-black/10 focus-visible:ring-black/10">
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(nigeriaSolarMap).map((state) => (
                      <SelectItem
                        key={state}
                        value={state}
                        className="focus:bg-black/10  focus:text-black/80"
                      >
                        {state.charAt(0).toUpperCase() +
                          state.slice(1).replace("-", " ")}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleCalculate}
            disabled={!canCalculate()}
            className="w-full"
            size="lg"
          >
            Calculate
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EnergyCalculatorCard;
