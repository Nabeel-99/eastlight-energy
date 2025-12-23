"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";
import { Info } from "lucide-react";
import { Button } from "./ui/button";

type EnergyResultModalProps = {
  formData: any;
  results: any;
  setShowResults: (showResults: boolean) => void;
  showResults: boolean;
  startOver: () => void;
};
const EnergyResultModal = ({
  formData,
  results,
  setShowResults,
  showResults,
  startOver,
}: EnergyResultModalProps) => {
  return (
    <Dialog open={showResults} onOpenChange={setShowResults}>
      <DialogContent className="lg:max-w-2xl">
        <div className="flex flex-col  gap-10">
          <img
            src="/checkmark.webp"
            alt="checkmark"
            className="w-40 aspect-square h-full mx-auto object-contain"
          />

          <div>
            <DialogHeader className="flex flex-col items-center gap-2">
              {" "}
              <DialogTitle className="font-bold text-xl">
                Energy Calculator
              </DialogTitle>
              <DialogDescription className="font-bold text-lg">
                Your Energy Recommendation
              </DialogDescription>
            </DialogHeader>{" "}
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Inverter Capacity:</span>
                  <span className="text-xl font-bold">
                    {results.inverterCapacity} kVA
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">
                    {formData.batteryType === "dry-cell"
                      ? "Dry cell/Tubular"
                      : "Lithium"}{" "}
                    Battery Capacity:
                  </span>
                  <span className="text-xl font-bold">
                    {results.batteryCapacity} kWh
                  </span>
                </div>
                {results.solarCapacity && (
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Solar Panel Capacity:</span>
                    <span className="text-xl font-bold">
                      {results.solarCapacity} kWp
                    </span>
                  </div>
                )}
              </div>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <p>
                    {" "}
                    Don't understand this recommendation? Share your results
                    with us{" "}
                    <span>
                      <a
                        href="/contact"
                        className="underline text-primary font-medium"
                      >
                        here
                      </a>{" "}
                    </span>
                  </p>
                </AlertDescription>
              </Alert>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={startOver}>
                Start Over
              </Button>
              <Button onClick={() => setShowResults(false)} className="flex-1">
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnergyResultModal;
