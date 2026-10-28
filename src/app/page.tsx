import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import ManuscriptPreviewer from "@/components/ManuscriptPreviewer";
import StagesGuide from "@/components/StagesGuide";
import FormattingStudio from "@/components/FormattingStudio";
import Portfolio from "@/components/Portfolio";
import Genres from "@/components/Genres";
import Process from "@/components/Process";
import QuoteEstimator from "@/components/QuoteEstimator";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Ticker />
        <Services />
        <ManuscriptPreviewer />
        <StagesGuide />
        <FormattingStudio />
        <Portfolio />
        <Genres />
        <Process />
        <QuoteEstimator />
        <About />
        <Reviews />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
