import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Shield, Award, Medal, Leaf } from "lucide-react";

interface CertificationProps {
  badges?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

const CertificationSection = ({
  badges = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Food Safety Certified",
      description: "Meets highest industry standards",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Premium ingredients only",
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Award Winning",
      description: "Best local bakery 2023",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "All Natural",
      description: "No artificial ingredients",
    },
  ],
}: CertificationProps) => {
  return (
    <section className="w-full min-h-[300px] bg-[#F9F3E6] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-12">
          Our Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <Badge
                variant="outline"
                className="p-4 bg-white border-[#DAA520] mb-4"
              >
                {badge.icon}
              </Badge>
              <h3 className="text-xl font-semibold text-[#8B4513] mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
