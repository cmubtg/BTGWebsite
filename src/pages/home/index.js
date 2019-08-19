import React from "react";
import HeroSection from "./../../components/HeroSection";
import FeaturesSection from "./../../components/FeaturesSection";
import TestimonialsSection from "./../../components/TestimonialsSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="primary"
        size="large"
        title="We build the cutting edge"
        subtitle="CMU’s Business Technology Group pioneers research in applied business technology that improves work, play, and education."
        buttonText="Learn more"
        buttonOnClick={() => {
          router.push("/signup");
        }}
      />
      <FeaturesSection
        color="white"
        size="medium"
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <TestimonialsSection
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Learn more by joining our weekly newsletter"
        subtitle=""
        buttonText="Subscribe now"
        buttonOnClick={() => {
          router.push("/signup");
        }}
      />
    </>
  );
}

export default HomePage;
