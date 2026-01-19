import { GoHome } from "react-icons/go";
import { FaRegFolder } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { GoMail } from "react-icons/go";
import { Link, useLocation } from "react-router";

const navbarData = [
  { info: "Home", icon: GoHome, link: "/" },
  { info: "Projects", icon: FaRegFolder, link: "/projects" },
  { info: "Experience", icon: MdWorkOutline, link: "/experience" },
  { info: "Thoughts", icon: TbEdit, link: "/blogs" },
  { info: "Contact", icon: GoMail, link: "/contacts" },
];

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-center px-2 py-2 sm:py-3">
        <ul
          className="
            flex items-center
            gap-10 sm:gap-4 md:gap-5
            noise-bg
            px-3 sm:px-4 md:px-5
            py-2
            rounded-xl sm:rounded-2xl
          "
          style={{ "--bg-base": "#272829" }}
        >
          {navbarData.map(({ info, icon: Icon, link }, index) => {
            const isActive = location.pathname === link;

            return (
              <li key={index} className="relative group">
                <Link
                  to={link}
                  aria-label={info}
                  className={`
                    flex items-center justify-center
                    p-2 sm:p-2
                    rounded-lg
                    transition-colors
                    ${
                      isActive
                        ? "bg-violet-600 text-white"
                        : "hover:bg-violet-600/80 text-gray-300"
                    }
                  `}
                >
                  <Icon className="text-xl sm:text-lg md:text-xl" />
                </Link>
                <span
                  className="
                    hidden md:block
                    absolute left-1/2 top-11
                    -translate-x-1/2
                    bg-[#2e2e2e]
                    text-[11px]
                    px-2 py-1
                    rounded
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    whitespace-nowrap
                  "
                >
                  {info}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
