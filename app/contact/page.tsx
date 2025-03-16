"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ContactPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 py-12">
      <motion.section
        className="text-center max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Have questions or feedback? We're here to help!
        </p>
        <Card className="p-8 w-full max-w-xl mx-auto">
          <CardContent className="p-0 space-y-4">
            <p className="text-gray-600">
              <strong>Email:</strong> support@devlink.dev
            </p>
            <p className="text-gray-600">
              <strong>Location:</strong> San Francisco, CA
            </p>
            <p className="text-gray-600 mt-4">
              For general inquiries, please email us or connect on social media.
              We typically respond within 24 hours.
            </p>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
