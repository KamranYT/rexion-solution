import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us | Rexion Solution",
  description:
    "Get in touch with Rexion Solution for inquiries, project requests, or information about our digital services.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="pt-16 pb-8 bg-gray-light dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-dark max-w-3xl">
            Get in touch with our team. We&apos;d love to hear from you and
            discuss how we can help with your digital needs.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactInfo />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section bgColor="light" className="py-12">
        <div className="rounded-xl overflow-hidden shadow-lg h-96 w-full">
          {/* Placeholder for Google Map */}
          <div className="w-full h-full bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
            <p className="text-gray-dark text-lg">Google Map Placeholder</p>
          </div>
        </div>
      </Section>
    </MainLayout>
  );
}
