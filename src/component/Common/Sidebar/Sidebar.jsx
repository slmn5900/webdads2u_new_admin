import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  Newspaper,
  Briefcase,
  Share2,
  Mail,
  Phone,
  ClipboardList,
  Users,
} from "lucide-react";
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
          <Briefcase size={18} />
          Open Positions
        </NavLink>

        <NavLink
          to="/apply-position"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Users   size={18} />
          Career
        </NavLink>

        <NavLink
          to="/social"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Share2 size={18} />
          Social Updates
        </NavLink>

        <NavLink
          to="/enquiry"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Mail size={18} />
          Project Enquiry
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Phone size={18} />
          Contact
        </NavLink>

        <NavLink
          to="/hires"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <ClipboardList size={18} />
          <span className="ml-2">Project Hires</span>
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Newspaper size={18} />
          Blog
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
