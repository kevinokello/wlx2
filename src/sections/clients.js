/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Service from "components/cards/service";
import icon4 from "assets/images/vl.png";
import icon5 from "assets/images/image.svg";
import icon6 from "assets/images/node.png";
import icon7 from "assets/images/react.png";
import icon8 from "assets/images/nxt.svg";
import icon9 from "assets/images/and.png";

const data = [
  {
    id: 1,
    icon: icon4,
    title: "Laravel",
    description: `Go with Laravel — a mature and agile PHP framework that concentrates on the best practices.`,
  },
  {
    id: 2,
    icon: icon5,
    moreLink: "#learn-more",
    title: "Digital promotion",
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 3,
    icon: icon6,
    moreLink: "#learn-more",
    title: "Business Enterprise",
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 4,
    icon: icon7,
    moreLink: "#learn-more",
    title: "Marketing & advertising",
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 5,
    icon: icon8,
    moreLink: "#learn-more",
    title: "Ultimate development",
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 6,
    icon: icon9,
    moreLink: "#learn-more",
    title: "Online support",
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
];

const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          id="faq"
          sx={styles.heading}
          title="Technologies we use"
          description="We build all of our projects using a single tech stack Laravel (backend), Vue.js,Nuxt and Tailwindcss (frontend), Flutter and React Native (mobile apps), and cloud (hosting)."
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
export default OtherServices;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [9, 9, 9, 11],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: "10px auto 0",
    },
  },
  contentWrapper: {
    gap: ["30px 30px", "30px 30px", "30px 30px", "80px 30px"],
    display: "grid",
    justifyContent: ["center", "center", "center", "unset"],
    gridTemplateColumns: [
      "repeat(1, 285px)",
      "repeat(1, 325px)",
      "repeat(1, 285px)",
      "repeat(3, 1fr)",
    ],
  },
};
