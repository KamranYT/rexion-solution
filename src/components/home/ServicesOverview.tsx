"use client";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const ServicesOverview = () => {
  const services = [
    {
      icon: "web",
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies.",
    },
    {
      icon: "mobile",
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: "design",
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that create exceptional user experiences.",
    },
    {
      icon: "cloud",
      title: "Cloud Solutions",
      description:
        "Scalable, secure cloud infrastructure and deployment services.",
    },
    {
      icon: "ai",
      title: "AI Integration",
      description:
        "Intelligent solutions to automate processes and gain insights.",
    },
    {
      icon: "consult",
      title: "IT Consulting",
      description: "Strategic technology guidance to help your business grow.",
    },
  ];

  return (
    <Section>
      <SectionHeading
        title="Our Services"
        subtitle="We offer comprehensive digital solutions to help your business thrive in the digital landscape."
        center
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-14 h-14 mb-5 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              {renderIcon(service.icon)}
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-dark mb-5">{service.description}</p>
            <Button href="/services" variant="outline" size="sm">
              Learn More
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="/services" size="lg">
          View All Services
        </Button>
      </div>
    </Section>
  );
};

// Helper function to render icons
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case "web":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M4.06 13a8 8 0 0 0 5.18 6.51A18.5 18.5 0 0 1 8.02 13zm0-2A18.5 18.5 0 0 1 8.02 5.49 8 8 0 0 0 4.06 11zm15.88 0a8 8 0 0 0-5.18-6.51A18.5 18.5 0 0 1 15.98 11zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m1.88-11a18.5 18.5 0 0 1-1.88 7.5 18.5 18.5 0 0 1-1.88-7.5zm0-2a18.5 18.5 0 0 1-1.88-7.5 18.5 18.5 0 0 1 1.88 7.5z" />
        </svg>
      );
    case "mobile":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      );
    case "design":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      );
    case "cloud":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      );
    case "ai":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H8.94c-.6 0-1.15.26-1.54.72L3.46 8.44c-.3.36-.46.81-.46 1.28v1.45c0 .8.4 1.53 1.05 1.97L4 13.18v6.31c0 .55.45 1.01 1 1.01h14c.55 0 1-.45 1-1.01v-6.31l-.05-.04c.65-.44 1.05-1.17 1.05-1.97zM12.72 4h2.34l3.45 4h-5.79V4zm-4.35 0H10v4H4.38l3.99-4zm4.35 11.15 2.78-2.79.5.5-3.28 3.28-3.28-3.28.5-.5 2.78 2.79zM8 20v-5h2v5H8zm6 0v-5h2v5h-2z" />
        </svg>
      );
    case "consult":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M15 4v2H5v12h14v-4h2v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10zm4 2v3h-3v2h3v3l4-4-4-4z" />
        </svg>
      );
    default:
      return null;
  }
};

export default ServicesOverview;
