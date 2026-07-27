import Container from "../common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 lg:pt-24 pb-20"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroContent />

          <HeroImage />
        </div>
      </Container>
    </section>
  );
};

export default Hero;