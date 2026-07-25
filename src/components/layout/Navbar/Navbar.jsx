import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

import ThemeToggle from "../../common/ThemeToggle";
import Button from "../../common/Button";
import Container from "../../common/Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <Container>

        <motion.div
          initial={{ y: -70 }}
          animate={{ y: 0 }}
          transition={{ duration: .5 }}

          className="
          mt-3

          rounded-full

          backdrop-blur-xl

          bg-[#ffffff]
          dark:bg-[#0f1039]

          border

          border-[#ffffff]

          shadow-xl

           px-8

        

          flex

          items-center

          justify-between
          "
        >

          <Logo />

          <NavLinks />

          <div className="hidden lg:flex items-center gap-4">

            <ThemeToggle />

            <Button>

              Let's Grow

            </Button>

          </div>

        </motion.div>

      </Container>

    </header>
  );
};

export default Navbar;