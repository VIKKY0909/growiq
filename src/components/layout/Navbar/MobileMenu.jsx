import { Menu } from "lucide-react";

const MobileMenu = () => {
  return (
    <button className="lg:hidden p-2">
      <Menu size={28} />
    </button>
  );
};

export default MobileMenu;