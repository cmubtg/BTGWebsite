import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import TeamBios from "./../TeamBios";
import "./styles.scss";

function TeamBiosSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <TeamBios
          people={[
            {
              avatar:
                "https://media.licdn.com/dms/image/C4E03AQG5tYmDHJs9kA/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=y9EgygS0K48QmJhZjfHm2JelG1xoszT8k_DNZ146wZI",
              name: "Calvin Lui",
              role: "President",
              bio:
                "Calvin is the President of CMUBTG. He is a senior studying Information Systems. Calvin has been 6’3” since high school, but only recently this summer, he was able to touch the rim of a basketball hoop. Sad reacts only.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://www.linkedin.com/in/calvinhklui/"
            },
            {
              avatar:
                "https://media.licdn.com/dms/image/C4D03AQHpiBSWIdF3xw/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=G_bAs5f3cu3oLjHSlGkxjbhie_GpidWqqjIZJmN6ALw",
              name: "Jenny Zhu",
              role: "Head of Curation",
              bio:
                "Jenny serves as the Head of Curation at CMUBTG. She is a senior studying Information Systems and Statistics and Machine Learning. Recently, Jenny has been enjoying jazz, funk, and sadboi lofi hip hop.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://www.linkedin.com/in/jenny-z-34b65ba7/"
            },
            {
              avatar:
                "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/67881568_874773979570522_7004249365149646848_n.jpg?_nc_cat=104&_nc_oc=AQmhvonA4eZ6MqD4PiJB8_2hYEy3lUf_0RciLJm32_OIS1xNPQJt4D4EtUl5QD2yaQA&_nc_ht=scontent-lga3-1.xx&oh=74e499b534e9588227509ba77c99caea&oe=5DD000DE",
              name: "Eric Cheng",
              role: "Head of Product",
              bio:
                "Eric serves as Head of Product at CMUBTG. He studies business at Carnegie Mellon. Fun fact: Eric is probably BTG’s best chef.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://www.linkedin.com/in/eric-cheng986/"
            },
            {
              avatar:
                "https://media.licdn.com/dms/image/C4E03AQHKMJ5xHz8gkQ/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=09LkyWBoInZZpPUk3EUaUXxYYMQVRZB2D7Gqnajgf7c",
              name: "Will Zeng",
              role: "Head of Curriculum",
              bio:
                "William is the Head of Curriculum at CMUBTG. He is a sophomore studying Statistics and Machine Learning. He enjoys game theory and games of chance.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://www.linkedin.com/in/william-zeng-364791149/"
            },
            {
              avatar: "https://i.imgur.com/2sTNNA0.jpg",
              name: "Yvonne Liang",
              role: "Head of Finance",
              bio:
                "Yvonne is the Head of Finance at CMUBTG. She is a sophomore studying business. She enjoys hikes and lakes.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://www.linkedin.com/in/yvonne-liang-1b9a56190/"
            },
            {
              avatar:
                "https://media.licdn.com/dms/image/C4E03AQGMtPZd9DYpTQ/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=LBFvySKsbMHFYT7ZK-8-Kff9twxgWfU8_Irrs3BgHhM",
              name: "Matthew Guo",
              role: "Head of Design",
              bio:
                "Matthew is Head of Design at CMUBTG and studies Information Systems + HCI. Having grown up in Sydney and Shanghai, he is always willing to explore more of Pittsburgh.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://www.linkedin.com/in/matthew-guo-003781173/"
            },
            {
              avatar:
                "https://scontent.fagc3-1.fna.fbcdn.net/v/t1.0-1/29572759_2073740146238555_7436951391639051433_n.jpg?_nc_cat=102&_nc_oc=AQlggmCAozS5pF1unWpIsqzT5CwDvc_9Tk3DZeDak5UjZv5tQTJ-qyX-yL62vIvt-6g&_nc_ht=scontent.fagc3-1.fna&oh=3fb29514c565829cd57b416ccd999e85&oe=5DD18F27",
              name: "Navid Mamoon",
              role: "Head of Communications",
              bio:
                "Navid is Head of Communication at CMUBTG. He is a sophomore studying Business Administration. Navid’s in love with his guitar and has recently taken up rock climbing in lieu of his failed attempts at working out.",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://www.linkedin.com/in/navid-mamoon/"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default TeamBiosSection;
