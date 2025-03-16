"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/nextjs";

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Common card style class for consistency
  const cardClass =
    "p-6 h-full flex flex-col justify-between hover:shadow-lg transition-shadow";

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 py-12 pb-12">
      {/* Hero Section */}
      <motion.section
        className="text-center max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold mb-4">
          Showcase Your Dev Journey. Connect. Inspire.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          DevLink helps developers build and showcase their AI-powered
          portfolios. Get noticed & connect with the best.
        </p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <SignUpButton mode="modal">
            <Button size="lg" variant="default" className="font-medium">
              Get Started
            </Button>
          </SignUpButton>
          <Button variant="outline" size="lg">
            Explore Portfolios
          </Button>
        </motion.div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="mt-16 w-full max-w-4xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerChildren}
        >
          <motion.div variants={fadeIn} className="h-full">
            <Card className={cardClass}>
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold">
                  1. Sign Up & Personalize
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Create an account and customize your profile with skills,
                  experience, and more.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn} className="h-full">
            <Card className={cardClass}>
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold">
                  2. Add Projects & Skills
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Showcase your best work by adding projects, tech stack, and
                  achievements.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeIn} className="h-full">
            <Card className={cardClass}>
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold">3. Get Discovered</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Connect with recruiters, collaborate with peers, and grow your
                  network.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Key Features */}
      <motion.section
        className="mt-16 w-full max-w-4xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerChildren}
        >
          {[
            {
              title: "AI-Powered Portfolio",
              description:
                "Get intelligent insights and recommendations for improving your developer portfolio.",
            },
            {
              title: "GitHub Integration",
              description:
                "Automatically sync your latest projects and contributions directly from GitHub.",
            },
            {
              title: "Customizable Themes",
              description:
                "Personalize your portfolio with different themes and layouts to match your style.",
            },
            {
              title: "Real-Time Analytics",
              description:
                "Track visits, engagement, and profile performance with real-time analytics.",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeIn} className="h-full">
              <Card className={cardClass}>
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold">Join DevLink Today</h2>
        <p className="text-lg text-gray-600 my-4">
          Start building your AI-powered developer portfolio now.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <SignUpButton mode="modal">
            <Button size="lg" variant="default" className="font-medium">
              Get Started
            </Button>
          </SignUpButton>
        </motion.div>
      </motion.section>
    </div>
  );
}
