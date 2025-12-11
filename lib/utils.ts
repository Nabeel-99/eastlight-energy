import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
export function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

export const timestamp = `'${new Date().toLocaleString("en-NG", {
  timeZone: "Africa/Lagos",
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
})}`;

export const formatDateForSheet = (dateString: string) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  return date.toISOString().split("T")[0];
};
export const locations = [
  { id: "abia", title: "Abia" },
  { id: "adamawa", title: "Adamawa" },
  { id: "akwa-ibom", title: "Akwa Ibom" },
  { id: "anambra", title: "Anambra" },
  { id: "bauchi", title: "Bauchi" },
  { id: "bayelsa", title: "Bayelsa" },
  { id: "benue", title: "Benue" },
  { id: "borno", title: "Borno" },
  { id: "cross-river", title: "Cross River" },
  { id: "delta", title: "Delta" },
  { id: "ebonyi", title: "Ebonyi" },
  { id: "edo", title: "Edo" },
  { id: "ekiti", title: "Ekiti" },
  { id: "enugu", title: "Enugu" },
  { id: "gombe", title: "Gombe" },
  { id: "imo", title: "Imo" },
  { id: "jigawa", title: "Jigawa" },
  { id: "kaduna", title: "Kaduna" },
  { id: "kano", title: "Kano" },
  { id: "katsina", title: "Katsina" },
  { id: "kebbi", title: "Kebbi" },
  { id: "kogi", title: "Kogi" },
  { id: "kwara", title: "Kwara" },
  { id: "lagos", title: "Lagos" },
  { id: "nasarawa", title: "Nasarawa" },
  { id: "niger", title: "Niger" },
  { id: "ogun", title: "Ogun" },
  { id: "ondo", title: "Ondo" },
  { id: "osun", title: "Osun" },
  { id: "oyo", title: "Oyo" },
  { id: "plateau", title: "Plateau" },
  { id: "rivers", title: "Rivers" },
  { id: "sokoto", title: "Sokoto" },
  { id: "taraba", title: "Taraba" },
  { id: "yobe", title: "Yobe" },
  { id: "zamfara", title: "Zamfara" },
  { id: "fct", title: "FCT, Abuja" },
  {
    id: "other",
    title: "Other Location",
  },
];
export const specLabels = {
  // === Solar Panels ===
  maxPower: "Maximum Power (Pmax)",
  maxPowerVoltage: "Maximum Power Voltage (Vmp)",
  maxPowerCurrent: "Maximum Power Current (Imp)",
  openCircuitVoltage: "Open-Circuit Voltage (Voc)",
  shortCircuitCurrent: "Short-Circuit Current (Isc)",
  moduleEfficiency: "Module Efficiency (%)",
  operatingTemp: "Operating Temperature",
  maxSystemVoltage: "Maximum System Voltage",
  maxSeriesFuseRating: "Maximum Series Fuse Rating",
  powerTolerance: "Power Tolerance",
  tempCoefficient: "Temp. Coefficient of Pmax",
  nominalOperatingCellTemp: "NOCT",
  dimensions: "Dimensions (L×W×H)",
  weight: "Weight",

  // === MPPT Controllers ===
  maxBatteryCurrent: "Max Battery Current",
  systemVoltage: "System Voltage",
  pvStartupVoltage: "PV Startup Voltage",
  maxSolarInputVoltage: "Max Solar Input Voltage",
  pvArrayMPPTRange: "PV Array MPPT Voltage Range",
  maxSolarPanelInput: "Max PV Input Power",
  chargingAlgorithm: "Charging Algorithm",
  chargingStages: "Charging Stages",
  humidity: "Operating Humidity",
  maxEfficiency: "Maximum Efficiency",
  netWeight: "Net Weight",

  // === Inverters (High Frequency & Transformer) ===
  model: "Model",
  ratedOutputPowerVA: "Rated Power (VA)",
  ratedOutputPowerW: "Rated Power (W)",
  nominalDCInputVoltage: "DC Input Voltage",
  inputVoltageWaveform: "Input Waveform",
  nominalInputVoltage: "Nominal AC Input Voltage",
  lowLineDisconnect: "Low Line Disconnect",
  lowLineReconnect: "Low Line Reconnect",
  acInputRange: "AC Input Range",
  highLineDisconnect: "High Line Disconnect",
  highLineReconnect: "High Line Reconnect",
  nominalInputFrequency: "Input Frequency",
  efficiencyLinMode: "Line Mode Efficiency",
  efficiency: "Efficiency",
  transferTime: "Transfer Time",
  passThroughWithoutBattery: "Bypass Mode (No Battery)",
  maxInverterRectifierCurrent: "Max AC Input Current",
  maxGridChargeCurrent: "Max AC Charge Current",
  maxChargeCurrent: "Max Charge Current",
  overChargeProtection: "Overcharge Protection",
  maxPVOpenCircuitVoltage: "Max PV Open Circuit Voltage",
  pvVoltageRange: "MPPT Voltage Range",
  maxInputPower: "Max PV Input Power",
  maxSolarChargingCurrent: "Max Solar Charge Current",
  maxInputCurrent: "Max PV Input Current",
  algorithm: "Charging Algorithm",
  batteryTypeSetting: "Battery Type Setting",
  dcMaxChargingDischargingCurrent: "Max DC Charge/Discharge Current",
  outputVoltageWaveform: "Output Waveform",
  nominalOutputVoltage: "Output Voltage",
  nominalOutputFrequency: "Output Frequency",
  parallelCapability: "Parallel Operation",
  peakEfficiency: "Peak Efficiency",
  outputCircuitProtection: "Output Protection",
  surgeRating: "Surge Capacity",
  coldStartVoltage: "Cold Start Voltage",
  operatingTemperature: "Operating Temperature",
  rangeStorageTemperature: "Storage Temperature",
  productDimension: "Dimensions (L×W×H)",
  highDCInputAlarmFault: "High DC Input Alarm & Fault",
  highDCInputRecovery: "High DC Input Recovery",
  ratedOutputPower: "Rated Output Power(W)",
  chargeCurrentRegulation: "Charge Current Regulation",
  overLoadProtection: "Over-Load Protection (SMPS load)",
  outputShortCircuit: "Output Short Circuit Protection",
  transferTimeACToDC: "Transfer Time (AC to DC)",
  transferTimeDCToAC: "Transfer Time (DC to AC)",
  maxBypassOverloadCurrent: "Max Bypass Overload Current",
  batteryVoltage: "Normal Input Voltage",
  inputVoltageRange: "Input Voltage Range",
  chargerShortCircuit: "Charger Short Circuit",
  chargingWay: "Charging Way",
  overLoadProtectionOutput: "Over-Load Protection (SMPS load)",

  // === LiFePO4 & GEL Batteries ===
  capacity: "Capacity",
  normalVoltage: "Nominal Voltage",
  normalVoltageRange: "Voltage Range",
  chargeCutoffVoltage: "Charge Cut-off Voltage",
  dischargeCutoffVoltage: "Discharge Cut-off Voltage",
  maxChargeDischargeCurrent: "Max Charge/Discharge Current",
  recommendChargeDischargeCurrent: "Recommended Current",
  normalOutputPower: "Continuous Power",
  maxOutputPower: "Peak Power",
  parallelConnection: "Parallel Support",
  communicationPort: "Communication",
  ingressProtection: "IP Rating",
  cycleTimes: "Cycle Life",
  workingTemp: "Operating Temperature",
  serialUse: "Serial Use",
  maxDischargeCurrent: "Max Discharge Current",
  normalOperatingTemp: "Normal Operating Temperature Range",
  workingTemperature: "Working Temperature",

  // GEL Specific
  cellsPerUnit: "Cells per Unit",
  voltagePerUnit: "Voltage per Unit",
  internalResistance: "Internal Resistance",
  recommendedMaxChargingCurrent: "Max Recommended Charge Current",
  operatingTempRange: "Operating Temperature Range",
  floatChargingVoltage: "Float Charge Voltage",
  equalizationVoltage: "Equalization Voltage",
  selfDischarge: "Self-Discharge Rate",

  // === Street Lights ===
  solarPanel: "Solar Panel Power",
  battery: "Battery Capacity",
  luminousFlux: "Luminous Flux",
  recommendInstallHeight: "Recommended Height",
  solarPanelChargeTime: "Full Charge Time",
  rainyDaysSupport: "Rainy Day Backup",
  workingTimePerDay: "Daily Working Hours",
  colorTemperature: "Color Temperature",
  lightPoleDiameter: "Pole Diameter",
  storageTemp: "Storage Temperature",
  operatingHumidity: "Operating Humidity",
  waterproofLevel: "Waterproof Rating",

  // === Portable Systems ===
  inverterPowerDefault: "Inverter Output",
  led: "LED Light",
  dc5521: "DC 5521 Output",
  usb1: "USB QC3.0",
  usb2: "USB 2.0",
  typeC1: "Type-C PD",
  typeC2: "Type-C PD (Secondary)",
  maxPVInputMPPT: "Max PV Input",
  acInputVoltageRange: "AC Input Range",
  utilityPVChargePower: "AC + PV Charging Power",
  expandCapacity: "Expandable Battery",

  // === Distribution Box ===
  acRatingVoltageRated: "Rated AC Voltage",
  acOperationVoltageRange: "AC Operating Range",
  acRatedCurrent: "Rated Current",
  acElectricCurrentL1SettingRange: "Current Limit Range",
  displayResetStartDelay: "Reset Delay",
  voltageMeasurementAccuracy: "Voltage Accuracy",
  acGridFrequency: "Grid Frequency",
  levelsOfProtection: "Protection Level",
  dcInputVoltageAndCurrent: "DC Input Rating",

  // === Off-Grid Systems ===
  inverter: "Inverter",
  lithiumBattery: "Lithium Battery",
  eBox: "E-Box",
  pvFrame: "PV Frame",
  pvCable: "PV Cables",
};
