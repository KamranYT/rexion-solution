"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

type Service = {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
};

const ServicesList = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: "web-dev",
      title: "Web Development",
      icon: "web",
      description:
        "We build responsive, modern websites and web applications tailored to your business needs.",
      features: [
        "Custom website design and development",
        "E-commerce solutions",
        "Content management systems",
        "Progressive web applications",
        "Performance optimization",
        "Accessibility compliance",
      ],
    },
    {
      id: "mobile-dev",
      title: "Mobile Development",
      icon: "mobile",
      description:
        "Create powerful mobile experiences with our native and cross-platform app development services.",
      features: [
        "iOS and Android app development",
        "Cross-platform development with React Native and Flutter",
        "Mobile app UI/UX design",
        "App performance optimization",
        "App store submission assistance",
        "Mobile app maintenance and support",
      ],
    },
    {
      id: "ux-design",
      title: "UI/UX Design",
      icon: "design",
      description:
        "Our design team creates intuitive, engaging user interfaces that enhance user experience and drive conversions.",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Interaction design",
        "Usability testing",
        "Design systems creation",
      ],
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      icon: "cloud",
      description:
        "Leverage the power of cloud computing with our scalable, secure infrastructure and deployment services.",
      features: [
        "Cloud architecture design",
        "AWS, Azure, and Google Cloud implementation",
        "Serverless application development",
        "Cloud migration services",
        "DevOps and CI/CD pipelines",
        "Cloud security and compliance",
      ],
    },
    {
      id: "ai",
      title: "AI Integration",
      icon: "ai",
      description:
        "Integrate intelligent solutions to automate processes, gain insights, and create personalized experiences.",
      features: [
        "Machine learning implementation",
        "Natural language processing",
        "Chatbot development",
        "Predictive analytics",
        "Computer vision solutions",
        "AI strategy consulting",
      ],
    },
    {
      id: "consulting",
      title: "IT Consulting",
      icon: "consult",
      description:
        "Get strategic technology guidance to help your business grow, optimize operations, and stay competitive.",
      features: [
        "Technology strategy development",
        "Digital transformation consulting",
        "IT infrastructure assessment",
        "Software selection and evaluation",
        "Technology stack recommendations",
        "Security and compliance audits",
      ],
    },
  ];

  const toggleService = (id: string) => {
    if (selectedService === id) {
      setSelectedService(null);
    } else {
      setSelectedService(id);
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "web":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
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
            className="w-6 h-6"
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
            className="w-6 h-6"
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
            className="w-6 h-6"
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
            className="w-6 h-6"
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
            className="w-6 h-6"
          >
            <path d="M15 4v2H5v12h14v-4h2v4c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10zm4 2v3h-3v2h3v3l4-4-4-4z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <Section>
      <SectionHeading
        title="Our Services"
        subtitle="We offer a comprehensive range of digital services to help your business thrive."
        center
      />

      <div className="mt-12">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-6"
          >
            <div
              className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm cursor-pointer ${
                selectedService === service.id
                  ? "border-l-4 border-primary"
                  : ""
              }`}
              onClick={() => toggleService(service.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                    {renderIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-dark">{service.description}</p>
                  </div>
                </div>
                <div className="text-gray-dark">
                  {selectedService === service.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <AnimatePresence>
                {selectedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-4 border-t border-gray/10"
                  >
                    <h4 className="font-medium mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary mr-2 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesList;
