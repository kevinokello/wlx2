/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import videoCalling from 'assets/images/balancing.svg';

const VideoCalling = () => {
  return (
    <section sx={styles.section} id="features">
      <Container>
        <SectionHeading
          title="Go beyond ultimate Services"
          learnMore=""
          sx={{ mb: [6] }}
        />
        <Box as="figure" sx={styles.illustration}>
          <Image src={videoCalling} alt="Video Calling" />
        </Box>
        <SectionHeading
          description=" we shine by paying attention to scalable and flexible architecture, data security, as well as long term maintainability."
          learnMore=""
          sx={{ mb: [6] }}
        />
      </Container>
    </section>
  );
};

export default VideoCalling;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 15],
    pb: [6, null, null, null, 10, 12],
  },
  illustration: {},
};
