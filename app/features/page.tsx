"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/nextjs";

export default function FeaturesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      title: "AI-Powered Portfolio Generation",
      description: "Let AI help you create a stunning portfolio",
      details: [
        "Smart project descriptions and highlights",
        "SEO optimization suggestions",
        "Content improvement recommendations",
        "Skill analysis and gap identification",
      ],
    },
    {
      title: "GitHub Integration",
      description: "Seamless connection with your GitHub projects",
      details: [
        "Automatic project import and sync",
        "Contribution graph integration",
        "Repository statistics and insights",
        "Automated tech stack detection",
      ],
    },
    {
      title: "Customizable Themes",
      description: "Make your portfolio truly yours",
      details: [
        "Multiple professional themes",
        "Custom color schemes",
        "Layout customization",
        "Mobile-responsive designs",
      ],
    },
    {
      title: "Analytics Dashboard",
      description: "Track your portfolio's performance",
      details: [
        "Visitor analytics and insights",
        "Profile view statistics",
        "Engagement metrics",
        "Geographic visitor data",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 py-12">
      <motion.section
        className="text-center max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover all the tools and features that make DevLink the ultimate
          platform for developer portfolios.
        </p>
      </motion.section>

      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={fadeIn} className="w-full">
            <Card className="w-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <h2 className="text-2xl font-semibold">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full" />
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.section
        className="mt-20 text-center max-w-2xl mx-auto bg-slate-50 rounded-xl p-8 shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Join DevLink today and create your professional developer portfolio.
        </p>
        <SignUpButton mode="modal">
          <Button
            size="lg"
            variant="default"
            className="font-semibold text-lg px-8 py-6"
          >
            Create Your Portfolio
          </Button>
        </SignUpButton>
      </motion.section>
    </div>
  );
}
