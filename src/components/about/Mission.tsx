"use client";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Mission = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <SectionHeading
            title="Our Mission"
            subtitle="We aim to help businesses succeed in the digital world through innovative technology solutions."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-dark mb-6">
              At Rexion Solution, our mission is to empower businesses with
              cutting-edge technology solutions that drive growth, enhance
              efficiency, and create meaningful digital experiences for their
              customers.
            </p>
            <p className="text-gray-dark">
              We believe that technology should work for people, not the other
              way around. That&apos;s why we focus on creating intuitive,
              user-friendly solutions that solve real business problems and
              deliver tangible results.
            </p>
          </motion.div>
        </div>

        <div>
          <SectionHeading
            title="Our Vision"
            subtitle="We envision a world where technology enhances human potential and drives business success."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-dark mb-6">
              Our vision is to be the go-to partner for businesses seeking
              transformative digital solutions. We strive to lead the industry
              in innovation, quality, and customer satisfaction.
            </p>
            <p className="text-gray-dark">
              We envision a future where the digital divide is bridged, and all
              businesses, regardless of size, have access to world-class
              technology solutions that help them compete and succeed in an
              increasingly digital world.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Mission;
