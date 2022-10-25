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
          title="We are experts in bringing brands to life digitally"
          description=" We stay updated with the technology to build innovative digital products that meet client requirements across multiple business verticals and domains by housing some of the best professionals in the industry."
          learnMore=""
          sx={{ mb: [6] }}
        />
        <Box as="figure" sx={styles.illustration}>
          <Image src={videoCalling} alt="Video Calling" />
        </Box>
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
