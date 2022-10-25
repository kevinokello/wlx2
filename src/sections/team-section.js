/**  jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeading from "components/section-heading";
import TeamCard from 'components/team-card';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

import Member1 from 'assets/images/rbg.png';


const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Kevin Okello",
    title: "Kevin Okello",
    designation: "Lead Engineer",
    socialProfile: [
      {
        id: 1,
        name: "github",
        path: "https://github.com/kevinokello",
        icon: <FaGithub />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "linkedin",
        path: "https://www.linkedin.com/in/kevin-okello-b4b977202/",
        icon: <FaLinkedin />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeading
          slogan="our team"
          title="The most qualified and talented individuals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
