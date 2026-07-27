import Button from "../common/Button";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-col sm:flex-row gap-5">
      <Button>
        Start Your Growth Journey
      </Button>

      <Button variant="outline">
        View Our Work
      </Button>
    </div>
  );
};

export default HeroButtons;