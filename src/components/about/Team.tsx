"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      position: "Founder & CEO",
      bio: "John has over 15 years of experience in technology and software development. He founded Rexion Solution with a vision to help businesses leverage technology for growth.",
      imageUrl: null, // Placeholder for actual image
    },
    {
      name: "Sarah Johnson",
      position: "Creative Director",
      bio: "With a background in design and user experience, Sarah leads our creative team in developing beautiful, intuitive interfaces that users love.",
      imageUrl: null,
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "Michael brings deep technical expertise and a passion for cutting-edge technology. He oversees all technical aspects of our client projects.",
      imageUrl: null,
    },
    {
      name: "Lisa Rodriguez",
      position: "Lead Developer",
      bio: "Lisa is a full-stack developer with expertise in multiple programming languages and frameworks. She leads our development team with precision and creativity.",
      imageUrl: null,
    },
    {
      name: "David Patel",
      position: "Project Manager",
      bio: "David ensures our projects are delivered on time and exceed client expectations. His attention to detail and communication skills are unmatched.",
      imageUrl: null,
    },
    {
      name: "Emma Wilson",
      position: "Marketing Specialist",
      bio: "Emma develops and executes marketing strategies that help our clients reach their target audience and achieve their business goals.",
      imageUrl: null,
    },
  ];

  return (
    <Section bgColor="light">
      <SectionHeading
        title="Meet Our Team"
        subtitle="We're a diverse group of passionate individuals committed to delivering excellence."
        center
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-64 bg-gray-light dark:bg-slate-700 relative">
              {member.imageUrl ? (
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <span className="text-5xl font-bold text-primary/20">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.position}</p>
              <p className="text-gray-dark text-sm">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Team;
