import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/made/Navbar";
import Footer from "@/components/made/Footer";

export const metadata: Metadata = {
  title: "DevLink - Developer Portfolio Platform",
  description: "Build and showcase your AI-powered developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <ClerkProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
