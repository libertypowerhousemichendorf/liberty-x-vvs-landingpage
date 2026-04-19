"use client";
{/* build-trigger: 2026-04-19 */}

import { useState } from "react";
import Hero from "@/components/Hero";
import StoryTrust from "@/components/StoryTrust";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import FaqCTA from "@/components/FaqCTA";
import Events from "@/components/Events";
import Newsletter from "@/components/Newsletter";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import EventModal from "@/components/EventModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col w-full items-center justify-start p-0">
      {/* 1. Hero */}
      <Hero onOpen={() => setIsModalOpen(true)} />
      {/* 2. Bridge / About */}
      <StoryTrust />
      {/* 3. Package */}
      <Features onOpen={() => setIsModalOpen(true)} />
      {/* 4. Steps */}
      <Steps onOpen={() => setIsModalOpen(true)} />
      {/* 5. FAQ */}
      <FaqCTA onOpen={() => setIsModalOpen(true)} />
      {/* === UNIFIED BOTTOM SECTION === */}
      <div className="w-full bg-gray-50 flex flex-col">
        {/* 6. Events / Live-Vorträge */}
        <Events onOpenEvent={() => setIsEventModalOpen(true)} />
        {/* 7. Newsletter */}
        <Newsletter />
        {/* 8. Final CTA — Catch-All Net */}
        <FinalCTA onOpen={() => setIsModalOpen(true)} />
      </div>
      {/* Footer */}
      <Footer />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <EventModal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)} />
    </div>
  );
}