import Button from "./components/common/Button.jsx"
import Container from "./components/common/Container.jsx";
import ThemeToggle from "./components/common/ThemeToggle.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-[#050816] dark:bg-[#050816] dark:text-white transition-all duration-500">
      <Container className="py-20">

        <h1 className="text-5xl font-bold text-[#D6EB29] mb-10">
          GROOWIQ
        </h1>

        <div className="flex gap-5 flex-wrap items-center">

          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <ThemeToggle />

        </div>

      </Container>
    </div>
  );
}

export default App;