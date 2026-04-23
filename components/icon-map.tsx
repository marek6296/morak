import type { ComponentType, SVGProps } from "react";
import {
  SolarIcon,
  ClimateIcon,
  CameraIcon,
  ElectricIcon,
  CheckIcon,
  BatteryIcon,
  ChargerIcon,
  HouseIcon,
  ShieldIcon,
  BadgeIcon,
  ToolsIcon,
  ChatIcon,
  CertifiedIcon,
  SparkIcon
} from "@/components/icons";
import type { IconKey } from "@/lib/services-data";

type IconComp = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

export const ICON_MAP: Record<IconKey, IconComp> = {
  solar: SolarIcon,
  climate: ClimateIcon,
  camera: CameraIcon,
  electric: ElectricIcon,
  check: CheckIcon,
  battery: BatteryIcon,
  charger: ChargerIcon,
  house: HouseIcon,
  shield: ShieldIcon,
  badge: BadgeIcon,
  tools: ToolsIcon,
  chat: ChatIcon,
  certified: CertifiedIcon,
  spark: SparkIcon
};
