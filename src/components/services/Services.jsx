import Container from "../common/Container";
import ServicesHeading from "./ServiceHeading";
import ServicesBackground from "./ServicesBackground";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <section
  id="services"
  className="relative -mt-20 pt-40 pb-32 overflow-hidden py-24 lg:py-32"
>
  <ServicesBackground />

  <Container className="relative z-10">
    <ServicesHeading />
    <ServicesGrid/>

    {/* Cards will come next */}
  </Container>
</section>
 
  );
};

export default Services;