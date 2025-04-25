import { ReactNode, useState } from "react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import About from "./comps/About";
import Home from "./comps/Home";
import Contact from "./comps/Contact";

type NavItem = {
  id: string;
  icon: ReactNode;
  label: string;
  component?: ReactNode;
};

const navItems: NavItem[] = [
  { id: "Home", icon: <FaHome />, label: "Home", component: <Home /> },
  { id: "About", icon: <FaInfoCircle />, label: "About", component: <About /> },
  { id: "Projects", icon: <GoProjectSymlink />, label: "Projects" },
  { id: "Courses", icon: <SiCoursera />, label: "Courses" },
  {
    id: "Contact",
    icon: <FaPhone />,
    label: "Contact",
    component: <Contact />,
  },
];

const Navbar = () => {
  const [selected, setSelected] = useState<string>("Home");

  const getActiveComponent = () => {
    const activeItem = navItems.find((item) => item.id === selected);
    return activeItem?.component || <Home />;
  };

  return (
    <div className="w-full justify-between px-2 mt-10">
      <div className="flex">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-comp ${selected === item.id ? "selected" : ""}`}
            onClick={() => setSelected(item.id)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
      <div className="m-10 text-neutral-700 text-xl">
        {getActiveComponent()}
      </div>
    </div>
  );
};

export default Navbar;
