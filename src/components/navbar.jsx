import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  GraduationCap,
  Building2,
  Tag,
  Globe,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 text-lg transition ${isActive
      ? "border-b border-[#C00707] border-b-4"
      : "text-black hover:text-gray-500 text-5xl"
    }`;

  return (
    <>
      {/* Top Bar */}
      <nav className="hidden md:flex justify-between items-center p-4 bg-[#EBEAFF] text-white">
        <div className="space-x-4 flex">
          <p className="font-bold tracking-wide text-blue-900">+256782833163/ +25764363947</p>
          <p className=" font-bold text-blue-900">|</p>
          <p className="font-bold text-blue-900">edith.kulume@eduquestglobal.com</p>
          <p className="font-bold text-blue-900">|</p>
          <p className="font-bold text-blue-900">ABC BUILDING, 3e etage bureau D5/F, avenue de l’amitie</p>
        </div>

        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-[#9694FF] font-bold" : "text-[#3D3BF3] hover:text-[#9694FF] font-bold"
          }>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-[#9694FF] font-bold" : "text-[#3D3BF3] hover:text-[#9694FF] font-bold"
          }>
            About
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "text-[#9694FF] font-bold" : "text-[#3D3BF3] hover:text-[#9694FF] font-bold"
          }>
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center p-8 bg-white text-black shadow-md">

        {/* Logo */}
        <h2 className="font-bold text-lg">Logo</h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <NavLink to="/courses" className={linkStyle}>
            {({ isActive }) => (
              <>
                <GraduationCap size={25} className={isActive ? "text-[#C00707]" : "text-black"} />
                Top Courses
              </>
            )}
          </NavLink>

          <NavLink to="/universities" className={linkStyle}>
            {({ isActive }) => (
              <>
                <Building2 size={20} className={isActive ? "text-[#C00707]" : "text-black"} />
                Universities
              </>
            )}
          </NavLink>

          <NavLink to="/offers" className={linkStyle}>
            {({ isActive }) => (
              <>
                <Tag size={20} className={isActive ? "text-[#C00707]" : "text-black"} />
                Special Offers
              </>
            )}
          </NavLink>

          <NavLink to="/destinations" className={linkStyle}>
            {({ isActive }) => (
              <>
                <Globe size={20} className={isActive ? "text-[#CF0000] font-extrabold" : "text-black"} />
                Study Destinations
              </>
            )}
          </NavLink>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Email Us Today
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">

          {/* Top Links (now inside mobile menu) */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "block text-yellow-700 font-bold" : "block text-black font-bold"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "block text-yellow-700 font-bold" : "block text-black font-bold"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "block text-yellow-700 font-bold" : "block text-black font-bold"
            }
          >
            Contact
          </NavLink>

          <hr />

          {/* Main Links */}
          <NavLink to="/courses" className={linkStyle} onClick={() => setIsOpen(false)}>
            <GraduationCap size={20} /> Top Courses
          </NavLink>

          <NavLink to="/universities" className={linkStyle} onClick={() => setIsOpen(false)}>
            <Building2 size={20} /> Universities
          </NavLink>

          <NavLink to="/offers" className={linkStyle} onClick={() => setIsOpen(false)}>
            <Tag size={20} /> Special Offers
          </NavLink>

          <NavLink to="/destinations" className={linkStyle} onClick={() => setIsOpen(false)}>
            <Globe size={20} /> Study Destinations
          </NavLink>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block border border-gray-300 px-4 py-2 rounded-lg text-center"
          >
            Email Us Today
          </Link>

          {/* Optional: Contact Info */}
          <div className="pt-4 text-sm text-gray-500">
            <p>+256787425724</p>
            <p>georgeokello335@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;