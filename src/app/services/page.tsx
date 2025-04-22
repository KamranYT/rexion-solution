import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import ServicesList from "@/components/services/ServicesList";

export const metadata: Metadata = {
  title: "Services | Rexion Solution",
  description:
    "Explore our range of professional digital services including web development, mobile apps, UI/UX design, cloud solutions, and more.",
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="pt-16 pb-8 bg-gray-light dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-dark max-w-3xl">
            We offer a comprehensive range of digital solutions to help your
            business succeed in the digital landscape.
          </p>
        </div>
      </div>

      <ServicesList />
    </MainLayout>
  );
}
