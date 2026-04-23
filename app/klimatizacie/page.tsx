import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { SERVICE_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Klimatizácie a tepelné čerpadlá | MORAK",
  description:
    "Inštalácia a servis split, multi-split a kanálových klimatizácií pre domácnosti, kancelárie a prevádzky. Značky Daikin, Mitsubishi, LG."
};

export default function Page() {
  return <ServicePage data={SERVICE_DATA.klimatizacie} />;
}
