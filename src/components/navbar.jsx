import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  GraduationCap,
  Building2,
  Tag,
  Globe,
} from "lucide-react";

const Navbar = () => {

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 text-lg transition ${isActive
      ? "text-yellow-700 font-bold"
      : "text-black font-bold hover:text-gray-500"
    }`;
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-blue-950 text-white">
        <div className="space-x-4 flex">
          <p>+256787425724</p>
          <p>I</p>
          <p>georgeokello335@gmail.com</p>
        </div>

        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-600 font-bold" : "text-white hover:text-gray-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-600 font-bold" : "text-white hover:text-gray-300"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-600 font-bold" : "text-white hover:text-gray-300"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <nav className="flex justify-between items-center p-5 bg-white-600 text-black">
        <h2 className="font-bold text-lg">Logo</h2>

        <div className="flex space-x-10">
          <NavLink to="/courses" className={linkStyle}>
            {({ isActive }) => (
              <>
                <GraduationCap
                  size={25}
                  className={isActive ? "text-yellow-700" : "text-black"}
                />
                Top Courses
              </>
            )}
          </NavLink>

          <NavLink to="/universities" className={linkStyle}>
            {({ isActive }) => (
              <>
                <Building2
                  size={20}
                  className={isActive ? "text-yellow-700" : "text-black"}
                />
                Universities
              </>
            )}
          </NavLink>

          <NavLink to="/offers" className={linkStyle}>
          {({ isActive }) => (
              <>
                <Tag
                  size={20}
                  className={isActive ? "text-yellow-700" : "text-black"}
                />
                Special Offers
              </>
            )}
          </NavLink>

          <NavLink to="/destinations" className={linkStyle}>
          {({ isActive }) => (
              <>
                <Globe
                  size={20}
                  className={isActive ? "text-yellow-700" : "text-black"}
                />
                Study Destinations
              </>
            )}
          </NavLink>

        </div>
        <div>
          <Link
            to="/contact"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Email Us Today
          </Link>
        </div>
      </nav>
    </>

  );
};

export default Navbar;