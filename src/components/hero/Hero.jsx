import Container from "../common/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = ({open, setOpen}) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 lg:pt-24 pb-20"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          <HeroContent setOpen={setOpen} />

          <HeroImage  open={open}/>
        </div>
      </Container>
    </section>
  );
};

export default Hero;