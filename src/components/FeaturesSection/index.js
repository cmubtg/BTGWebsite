import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="FeaturesSection__box box">
          <Features
            columns={3}
            items={[
              {
                title: "Weekly lectures",
                body:
                  "Technical and non-technical majors are all welcome to weekly seminars in web development, machine learning, database management, API development, and much more.",
                image:
                  "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/teaching_f1cm.svg"
              },
              {
                title: "Specialized research groups",
                body:
                  "Apply to focused committes in machine learning or web development for advanced, group-oriented projects.",
                image: "https://uploads.divjoy.com/undraw-directions_x53j.svg"
              },
              {
                title: "Awesome guest speakers",
                body:
                  "Get a chance to hear from developers, product managers, and industry leaders from major companies in exclusive events.",
                image:
                  "https://uploads.divjoy.com/undraw-stability_ball_b4ia.svg"
              }
            ]}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
