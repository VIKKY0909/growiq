import SectionHeading from "./SectionHeading";
import ComparisonGrid from "./ComparisionGrid";

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      <div className="container mx-auto px-6">

        <SectionHeading />

        <ComparisonGrid />

      </div>
    </section>
  );
};

export default WhyUs;