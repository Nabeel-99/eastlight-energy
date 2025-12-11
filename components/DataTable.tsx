import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { specLabels } from "@/lib/utils";

const DataTable = ({
  currentSeries,
  specKeys,
}: {
  currentSeries: any;
  specKeys: string[];
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead className="font-bold text-black border-r border-black/10">
            Model
          </TableHead>
          {currentSeries.models.map((model: any) => (
            <TableHead
              key={model.model}
              className="font-bold text-black text-center border-r border-black/10 last:border-r-0"
            >
              {model.model}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {specKeys.map((key) => {
          if (key === "batteryTypeSetting") {
            const modelValues = currentSeries.models.map(
              (model: any) => model[key as keyof typeof model]
            );

            const rowCells = [];
            let i = 0;

            while (i < currentSeries.models.length) {
              const currentValue = modelValues[i];
              let spanCount = 1;

              for (let j = i + 1; j < currentSeries.models.length; j++) {
                if (
                  JSON.stringify(modelValues[j]) ===
                  JSON.stringify(currentValue)
                ) {
                  spanCount++;
                } else {
                  break;
                }
              }

              const model = currentSeries.models[i];
              const batterySettings = model[key as keyof typeof model];

              const isInverter2 =
                batterySettings &&
                typeof batterySettings === "object" &&
                Object.values(batterySettings).some(
                  (spec) =>
                    typeof spec === "object" &&
                    spec !== null &&
                    "voltage" in spec
                );

              rowCells.push(
                <TableCell
                  key={`${model.model}-${key}-${i}`}
                  colSpan={spanCount > 1 ? spanCount : 1}
                  className="border-r border-black/10 last:border-r-0 p-0"
                >
                  {batterySettings &&
                  typeof batterySettings === "object" &&
                  !Array.isArray(batterySettings) ? (
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-xs font-semibold p-2 text-center">
                            Battery Type
                          </th>
                          {!isInverter2 && (
                            <th className="text-xs font-semibold p-2 text-center">
                              Battery Type
                            </th>
                          )}
                          <th className="text-xs font-semibold p-2 text-center">
                            Boost CC/CV
                          </th>
                          <th className="text-xs font-semibold p-2 text-center">
                            Float
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(
                          batterySettings as Record<string, any>
                        ).map(([batteryType, specs]) => {
                          const isObject =
                            typeof specs === "object" &&
                            specs !== null &&
                            !Array.isArray(specs);
                          const boostValue =
                            isObject && "boostCC" in specs && "boostCV" in specs
                              ? `${specs.boostCC}/${specs.boostCV}`
                              : isObject && "boostCC" in specs
                                ? specs.boostCC
                                : String(specs || "");
                          const floatValue =
                            isObject && "float" in specs
                              ? String(specs.float || "")
                              : "";

                          return (
                            <tr
                              key={batteryType}
                              className="border-b border-gray-100 last:border-b-0"
                            >
                              <td className="text-xs p-2 text-center">
                                {batteryType}
                              </td>
                              {!isInverter2 && (
                                <td className="text-xs p-2 text-center">
                                  {batteryType}
                                </td>
                              )}
                              <td className="text-xs p-2 text-center">
                                {boostValue}
                              </td>
                              <td className="text-xs p-2 text-center">
                                {floatValue}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : (
                    "-"
                  )}
                </TableCell>
              );

              i += spanCount;
            }

            return (
              <TableRow key={key} className="">
                <TableCell className="font-medium border-r border-black/10 bg-gray-50">
                  {specLabels[key as keyof typeof specLabels] || key}
                </TableCell>
                {rowCells}
              </TableRow>
            );
          }

          const modelValues = currentSeries.models.map(
            (model: any) => model[key as keyof typeof model]
          );

          const rowCells = [];
          let i = 0;

          while (i < currentSeries.models.length) {
            const currentValue = modelValues[i];
            let spanCount = 1;

            for (let j = i + 1; j < currentSeries.models.length; j++) {
              if (modelValues[j] === currentValue) {
                spanCount++;
              } else {
                break;
              }
            }

            const model = currentSeries.models[i];

            rowCells.push(
              <TableCell
                key={`${model.model}-${key}-${i}`}
                colSpan={spanCount > 1 ? spanCount : 1}
                className={`text-center max-w-xs whitespace-pre-wrap border-r border-black/10 last:border-r-0 `}
              >
                {(() => {
                  const value = model[key as keyof typeof model];

                  if (typeof value === "object" && value !== null) {
                    return Object.entries(value).map(
                      ([system, batterySpec], index) => (
                        <div key={system} className="py-1">
                          <strong className="font-semibold">{system}</strong>

                          {typeof batterySpec === "object" &&
                          batterySpec !== null ? (
                            Object.entries(batterySpec).map(
                              ([chargeStage, voltage]) => (
                                <span
                                  key={chargeStage}
                                  className="block text-xs"
                                >
                                  {chargeStage}: {String(voltage)}
                                </span>
                              )
                            )
                          ) : (
                            <span className="block text-xs">
                              {String(batterySpec)}
                            </span>
                          )}

                          {index < Object.keys(value).length - 1 && (
                            <hr className="my-1 border-gray-200" />
                          )}
                        </div>
                      )
                    );
                  }

                  return String(value || "-");
                })()}
              </TableCell>
            );

            i += spanCount;
          }

          return (
            <TableRow key={key} className="">
              <TableCell className="font-semibold border-r border-black/10 bg-gray-50">
                {specLabels[key as keyof typeof specLabels] || key}
              </TableCell>
              {rowCells}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DataTable;
