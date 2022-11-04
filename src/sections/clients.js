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
    title: "Next Js",
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 3,
    icon: icon6,
    title: "Node Js",
    description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
  },
  {
    id: 4,
    icon: icon7,
    title: "React",
    description: `With React, we can quickly create single-page applications that load instantly and update themselves in real-time without needing to refresh your browser.`,
  },
  {
    id: 5,
    icon: icon8,
    title: "Vue Js",
    description: `Go with Vue — a progressive framework for building web applications that are agile, reusable and maintainable.`,
  },
  {
    id: 6,
    icon: icon9,
    title: "Android Development",
    description: `We are ready to tailor your idea for mobile into a state-of-the-art app. We coordinate around your vision, to bring you the next generation app in line with today’s development standards.`,
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
          description=""
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
