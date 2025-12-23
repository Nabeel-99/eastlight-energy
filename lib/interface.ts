export interface SelectedHotel {
  id: number;
  thumbnail: string;
  heading: string;
  subheading: string;
}

export interface FormAppliance {
  id: number;
  applianceId: string;
  wattage: number;
  units: number;
}
export interface FormData {
  propertyType: string;
  systemType: string;
  batteryType: string;
  appliances: FormAppliance[];
  backupHours: string;
  location: string;
}
