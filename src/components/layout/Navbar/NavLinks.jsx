
import { navLinks } from "../../../data/navigation.js";

const NavLinks = () => {
  return (
    <ul className="hidden lg:flex items-center gap-8">

      {navLinks.map((item) => (

        <li key={item.id}>

          <a
            href={`#${item.id}`}
            className="
            text-[15px]
            font-medium
            text-[#0F1039]
            dark:text-white
            hover:text-[#D5D93B]
            transition-all
            duration-300
            "
          >
            {item.title}
          </a>

        </li>

      ))}

    </ul>
  );
};

export default NavLinks;