"use client";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const AboutSummary = () => {
  const features = [
    {
      title: "Innovative Approach",
      description:
        "We use cutting-edge technologies to deliver exceptional results.",
    },
    {
      title: "Client-Focused",
      description:
        "Your success is our priority, with solutions tailored to your needs.",
    },
    {
      title: "Expert Team",
      description:
        "Our specialists bring years of industry experience to your project.",
    },
  ];

  return (
    <Section bgColor="light">
      <SectionHeading
        title="About Rexion Solution"
        subtitle="We are a team of passionate digital experts committed to transforming your business with innovative technology solutions."
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-dark mb-6">
            Founded in 2015, Rexion Solution has been at the forefront of
            digital innovation, helping businesses of all sizes leverage
            technology to achieve their goals. Our holistic approach combines
            creative design, technical expertise, and strategic thinking to
            deliver solutions that drive real results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-dark text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <Button href="/about">Learn More About Us</Button>
        </motion.div>

        <motion.div
          className="md:col-span-2 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
            {/* Placeholder for actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-5xl font-bold text-primary/30">
                Team Image
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 px-4 py-3 rounded-lg shadow-lg">
            <p className="font-bold text-3xl text-primary">7+</p>
            <p className="text-sm text-gray-dark">Years of Excellence</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSummary;
