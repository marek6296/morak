import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { SERVICE_DATA } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Elektroinštalácie a revízie | MORAK",
  description:
    "Silnoprúdové a slaboprúdové rozvody, rozvádzače, bleskozvody, wallboxy a úradné revízie. Oprávnenia §22 a §23."
};

export default function Page() {
  return <ServicePage data={SERVICE_DATA.elektroinstalacie} />;
}
