"use client";

import React from "react";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Practice } from "@/components/sections/Practice";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Team } from "@/components/sections/Team";
import { CaseResults } from "@/components/sections/CaseResults";
import { Testimonials } from "@/components/sections/Testimonials";
import { Resources } from "@/components/sections/Resources";
import { FAQ } from "@/components/sections/FAQ";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { FloatingCall } from "@/components/common/FloatingCall";

export default function Home() {
  return (
    <>
      {/* Loading animation pre-loader */}
      <LoadingScreen />

      {/* Sticky top glass navbar */}
      <Navbar />

      <main className="relative min-h-screen bg-bg-dark">
        {/* Hero Section (1) */}
        <Hero />

        {/* About the Firm Section (2) */}
        <About />

        {/* Practice Areas Section (3) */}
        <Practice />

        {/* Why Choose Us Section (4) */}
        <WhyChooseUs />

        {/* Meet Our Attorneys Section (5) */}
        <Team />

        {/* Case Results Section (6) */}
        <CaseResults />

        {/* Client Testimonials Section (7) */}
        <Testimonials />

        {/* Legal Resources Section (8) */}
        <Resources />

        {/* FAQ Section (9) */}
        <FAQ />

        {/* Consultation Booking Section (10) */}
        <Booking />

        {/* Contact & Map Section (11) */}
        <Contact />
      </main>

      {/* Footer Section (12) */}
      <Footer />

      {/* Common UI Floating utilities */}
      <ScrollToTop />
      <FloatingCall />
    </>
  );
}
