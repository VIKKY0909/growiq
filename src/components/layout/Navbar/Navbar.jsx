import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

import ThemeToggle from "../../common/ThemeToggle";
import Button from "../../common/Button";
import Container from "../../common/Container";
// import LeadModal from "../../CTA/LeadModel";
import { useState } from "react";

const Navbar = ({open, setOpen}) => {

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <motion.div
          initial={{ y: -70 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-3  flex  items-center  justify-between  gap-3  rounded-full  border  border-white/40  bg-white/10  dark:bg-[#0F1039]/80  backdrop-blur-xl  shadow-xl  px-4  sm:px-6  lg:px-8  py-2"
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavLinks />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <ThemeToggle />

            {/* Hide only on very small screens */}
            <div className="hidden min-[390px]:block">
         
              <Button
              onClick={() => setOpen(true)}
              className="px-3 py-2 text-xs sm:px-5 sm:py-2 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
              >
              Let's Grow
             </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              {/* <MobileMenu /> */}
              <MobileMenu onGrow={() => setOpen(true)} />
            </div>
          </div>
        </motion.div>
       
      </Container>
       {/* <LeadModal open={open}
        onClose={()=> setOpen(false)}
        /> */}
    </header>
  );
};

export default Navbar;