import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { SERVICE_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Kamerové a zabezpečovacie systémy | MORAK",
  description:
    "Profesionálne IP kamerové systémy 4K s nočným videním, NVR záznamom a vzdialeným prístupom. Alarmy, senzory a GDPR dokumentácia v cene."
};

export default function Page() {
  return <ServicePage data={SERVICE_DATA["kamerove-systemy"]} />;
}
