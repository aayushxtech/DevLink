"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutPage() {
  const router = useRouter();
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

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 py-12">
      {/* Hero Section */}
      <motion.section
        className="text-center max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold mb-4">About DevLink</h1>
        <p className="text-lg text-gray-600 mb-6">
          Building the future of developer portfolios through AI-powered
          innovation and community collaboration.
        </p>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="mt-16 w-full max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                DevLink aims to revolutionize how developers showcase their work
                and connect with opportunities. We believe in empowering
                developers with AI-driven tools to build outstanding portfolios
                that truly represent their skills and potential.
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where every developer has access to powerful
                tools that help them create impactful portfolios and meaningful
                connections in the tech community.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="mt-16 w-full max-w-4xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Innovation",
              description:
                "Pushing boundaries with AI and cutting-edge technology",
            },
            {
              title: "Community",
              description:
                "Fostering a supportive and inclusive developer network",
            },
            {
              title: "Excellence",
              description:
                "Committed to delivering the best tools and experience",
            },
          ].map((value, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Developer Team Section */}
      <motion.section
        className="mt-16 w-full max-w-5xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-8">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          DevLink is built by a passionate team of developers and designers who
          are committed to creating the best portfolio platform for developers
          worldwide.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
        >
          {[
            {
              name: "Alex Chen",
              role: "Founder & Lead Developer",
              bio: "Full-stack developer with 8+ years of experience building developer tools and communities.",
              links: {
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
              },
            },
            {
              name: "Priya Sharma",
              role: "AI Engineer",
              bio: "ML specialist focused on making AI accessible and useful for developers building their portfolios.",
              links: {
                github: "https://github.com",
                linkedin: "https://linkedin.com",
              },
            },
            {
              name: "Marcus Johnson",
              role: "UI/UX Designer",
              bio: "Designer with a passion for creating intuitive and beautiful experiences for developer tools.",
              links: {
                dribbble: "https://dribbble.com",
                linkedin: "https://linkedin.com",
              },
            },
          ].map((developer, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="overflow-hidden h-full flex flex-col border border-gray-200">
                <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-48 flex items-center justify-center">
                  <div className="w-32 h-32 bg-blue-100 rounded-full border-4 border-white shadow-md flex items-center justify-center text-blue-500">
                    {/* Developer icon with initials as alternative */}
                    <span className="text-3xl font-bold">
                      {developer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold">{developer.name}</h3>
                  <p className="text-blue-600 text-sm mb-3">{developer.role}</p>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    {developer.bio}
                  </p>

                  <div className="flex justify-center space-x-4 mt-auto">
                    {developer.links.github && (
                      <a
                        href={developer.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.291 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                          />
                        </svg>
                      </a>
                    )}
                    {developer.links.linkedin && (
                      <a
                        href={developer.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {developer.links.twitter && (
                      <a
                        href={developer.links.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                    {developer.links.dribbble && (
                      <a
                        href={developer.links.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.424 25.424 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.686 8.686 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.316 35.316 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="mt-16 text-center max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have questions or feedback? We'd love to hear from you.
        </p>
        <Button
          size="lg"
          variant="default"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </Button>
      </motion.section>
    </div>
  );
}
