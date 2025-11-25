import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  const solarProducts = [
    {
      title: "Solar Panels",
      description:
        "High-efficiency photovoltaic panels that convert sunlight into DC power, suitable for residential and commercial systems.",
      specs: [
        "Wattage: 400–500 W per panel",
        "Voltage: 31–41 V",
        "Current: 12 A",
        "Operating Temp: –40°C to +85°C",
        "Power Tolerance: ±3%",
      ],
      image: "/solarpanel.png",
    },
    {
      title: "MPPT Charge Controllers",
      description:
        "Smart controllers that maximize energy harvest from solar panels while protecting your batteries.",
      specs: [
        "Compatible Voltages: 12 V, 24 V, 48 V",
        "Max Battery Current: up to 120 A",
        "Max Solar Input Voltage: ~200 V",
        "Efficiency: >98%",
        "Charging Algorithm: Bulk, Absorption, Float",
        "Operating Temp: –25°C to +60°C",
      ],
      image: "/mppt.png",
    },
    {
      title: "Hybrid Inverters",
      description:
        "Inverters that convert DC from batteries or solar panels into AC power with built-in MPPT.",
      specs: [
        "Power Rating: up to 12 kVA",
        "DC Input Voltage: 12 V / 24 V / 48 V",
        "MPPT Voltage Range: 85–450 V",
        "Peak Efficiency: 93–95%",
        "Waveform: Pure sine wave",
        "Protections: Overload, short circuit, over-temp",
      ],
      image: "/inverter.webp",
    },
    {
      title: "LiFePO₄ Batteries",
      description:
        "Long-life lithium iron phosphate batteries for deep discharge and frequent cycling.",
      specs: [
        "Voltage: 48 V",
        "Capacity: 15 kWh",
        "Cycle Life: ≥6000 cycles @ 80% DoD",
        "BMS: Built-in protection system",
        "Operating Temp: –10°C to +60°C",
        "Weight: ~130 kg",
      ],
      image: "/po4battery.webp",
    },
    {
      title: "Gel Batteries",
      description:
        "Maintenance-free deep-cycle batteries, reliable for solar backup applications.",
      specs: [
        "Voltage: 12–48 V",
        "Deep-cycle design",
        "Maintenance-free",
        "Durable under moderate cycling",
        "Suitable for residential or commercial backup",
      ],
      image: "/gelbattery.webp",
    },
    {
      title: "All-in-One Solar Street Lights",
      description:
        "Integrated solar street lights combining panel, battery, and LEDs for outdoor lighting.",
      specs: [
        "LED Power: 60–100 W",
        "Battery: 340–920 Wh",
        "Waterproof Rating: IP65",
        "Rainy Day Support: 3–5 days autonomy",
        "Recommended Mounting Height: 6–9 m",
      ],
      image: "/streetlight.webp",
    },
    {
      title: "Portable Solar Kits",
      description:
        "Compact solar kits for camping, remote sites, or emergency power.",
      specs: [
        "Integrated panel + battery",
        "Output: DC/AC via built-in inverter",
        "Battery Type: LiFePO₄",
        "Protection: Overcharge, deep discharge, thermal",
        "Easy setup: plug-and-play",
      ],
      image: "/portablesolar.webp",
    },
    {
      title: "Complete Solar Systems",
      description:
        "Turnkey solar systems including panels, batteries, inverters, and controllers.",
      specs: [
        "PV Capacity: 6–12 kW",
        "Inverter: 6–12 kVA hybrid",
        "Battery Storage: 15 kWh+",
        "Controller: MPPT included",
        "Includes all panels, frame, cables, and installation plan",
      ],
      image: "/solarsystem.png",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 w-full h-full px-4 lg:px-20 pt-20 md:pt-40 ">
      <p className="border rounded-full p-2 px-4">SOLAR SOLUTIONS</p>
      <h2 className="text-4xl text-center lg:text-6xl">CWORTH ENERGY SOLAR</h2>
      <p className="text-lg lg:text-xl lg:max-w-xl text-center">
        Discover premium CWorth Energy solar products and systems.
        High-performance panels, inverters, and battery storage engineered for
        Nigerian conditions.
      </p>
      <Button className="p-6 rounded-full">Explore Products</Button>

      <section className="flex flex-col gap-6 mt-20 lg:mt-40 w-full">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-4xl text-center">Power Your World With Solar</p>
          <p className="text-center mx-auto text-lg lg:text-xl lg:max-w-xl">
            From panels to batteries, explore a range of products built for
            efficiency, reliability, and long-lasting performance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
