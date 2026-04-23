import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { SERVICE_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Fotovoltické elektrárne s dotáciou | MORAK",
  description:
    "Projektovanie a montáž fotovoltických elektrární s batériou aj pre elektromobily. Kompletné vybavenie dotácie Zelená domácnostiam III."
};

export default function Page() {
  return <ServicePage data={SERVICE_DATA.fotovoltika} />;
}
