import { WifiIcon } from "./icons/WifiIcon";
import { AquaparkIcon } from "./icons/AquaparkIcon";
import { TennisIcon } from "./icons/TennisIcon";
import { LaundryIcon } from "./icons/LaundryIcon";
import { ParkingIcon } from "./icons/ParkingIcon";

export function getServiceIcon(service: string) {
  switch (service) {
    case "wifi":
      return <WifiIcon />;

    case "aquapark":
      return <AquaparkIcon />;

    case "tennis_court":
      return <TennisIcon />;

    case "laundry":
      return <LaundryIcon />;

    case "parking":
      return <ParkingIcon />;

    default:
      return null;
  }
}

export function getServiceName(service: string): string | null {
  switch (service) {
    case "wifi":
      return "Wi-Fi";

    case "aquapark":
      return "Аквапарк";

    case "tennis_court":
      return "Теніс";

    case "laundry":
      return "Пральня";

    case "parking":
      return "Паркінг";

    default:
      return null;
  }
}

