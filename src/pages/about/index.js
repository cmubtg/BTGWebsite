import React from "react";
import ContentSection from "./../../components/ContentSection";
import TeamBiosSection from "./../../components/TeamBiosSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";
import "./styles.scss";

function AboutPage(props) {
  const router = useRouter();

  return (
    <>
      <ContentSection
        color="white"
        size="large"
        title="Our purpose"
        subtitle="The Carnegie Mellon Undergraduate Business Technology Group is a collective of interdisciplinary thinkers, dedicated to making applied technology skills accessible to everyone on campus."
      />
      <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default AboutPage;
