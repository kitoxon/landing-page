import { AboutSection } from "@/components/Sections/AboutSection";
import { CompanySection } from "@/components/Sections/CompanySection";
import { ClientSection } from "@/components/Sections/ClientSection";
import { FAQSection } from "@/components/Sections/FaqSection";
import { FeatureSection } from "@/components/Sections/FeatureSection";
import { HeroSection } from "@/components/Sections/HeroSection";
import { NewsSection } from "@/components/Sections/NewsSection";
import { ProcessSection } from "@/components/Sections/ProcessSection";
import { ServiceSection } from "@/components/Sections/ServiceSection";
import { TeamSection } from "@/components/Sections/TeamSection";
import Image from "next/image";
import { ContactCTASection } from "@/components/Sections/ContactCTASection";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServiceSection />
      </section>
      <section id="features">
        <FeatureSection />
      </section>
      <section id="process">
        <ProcessSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="news">
        <NewsSection />
      </section>
      <section id="clients">
        <ClientSection />
      </section>
      <section id="company">
        <CompanySection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
    </main>
  );
}
