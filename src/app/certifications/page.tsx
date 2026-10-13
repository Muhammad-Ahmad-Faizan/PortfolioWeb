import type { Metadata } from "next";
import CertificationsView from "./view";

export const metadata: Metadata = {
  title: "Certifications & Achievements",
  description: "Certificates, badges and hackathons earned by Muhammad Ahmad Faizan, software engineer.",
};

export default function CertificationsPage() {
  return <CertificationsView />;
}
