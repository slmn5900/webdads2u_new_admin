import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { Newspaper, Briefcase, Share2 } from "lucide-react";
import webdadaslogo1 from "../../../assets/webdadaslogo1.svg";
const Sidebar = () => {
  const baseLink =
    "flex items-center gap-3 px-3 py-2 text-sm rounded-md text-black hover:bg-gray-200";

  return (
    <aside className="h-screen w-64 bg-white text-black border-r border-gray-200">
      <div className="h-15 justify-center flex items-center px-4 border-b border-gray-200">
        <img
          src={webdadaslogo1}
          alt="webdadaslogo"
          className="h-10 object-contain"
        />
      </div>

      <nav className="p-3 space-y-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <AiOutlineDashboard />
          Dashboard
        </NavLink>

        <NavLink
          to="/open-positions"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Briefcase />
          Open Positions
        </NavLink>

        <NavLink
          to="/social"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Share2 />
          Social Updates
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Newspaper />
          Blog
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
