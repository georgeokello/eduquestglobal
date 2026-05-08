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
      ? "text-[#9B0F06] font-extrabold"
      : "text-black hover:text-[#9B0F06] text-5xl"
    }`;

  return (
    <>
      {/* Top Bar */}
      <nav className="hidden md:flex justify-between items-center p-4 bg-[#0D1164] text-white">
        <div className="space-x-4 flex">
          <p className="font-bold tracking-wide text-[#FFF6F6]">+256782833163/ +25764363947</p>
          <p className=" font-bold tracking-wide text-[#FFF6F6]">|</p>
          <p className="font-bold tracking-wide text-[#FFF6F6]">edith.kulume@eduquestglobal.com</p>
          <p className="font-bold tracking-wide text-[#FFF6F6]">|</p>
          <p className="font-bold tracking-wide text-[#FFF6F6]">ABC BUILDING, 3e etage bureau D5/F, avenue de l’amitie</p>
        </div>

        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "font-bold tracking-wide text-[#7EACB5]" : "text-[#FFF6F6] hover:text-[#9694FF] font-bold"
          }>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "font-bold tracking-wide text-[#7EACB5]" : "text-[#FFF6F6] hover:text-[#9694FF] font-bold"
          }>
            About
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
            isActive ? "font-bold tracking-wide text-[#7EACB5]" : "text-[#FFF6F6] hover:text-[#9694FF] font-bold"
          }>
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center p-8 bg-white text-black h-20 shadow-md shadow-red-500/10">

        {/* Logo */}
        <img
          src="images/logo/logo.jpeg"
          alt="EduQuest Global Logo"
          className="h-20 w-auto object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <NavLink to="/courses" className={linkStyle}>
            {({ isActive }) => (
              <>
                <GraduationCap size={25} className={isActive ? "text-[#9B0F06]" : "text-black"} />
                Top Courses
              </>
            )}
          </NavLink>

          <NavLink to="/universities" className={linkStyle}>
            {({ isActive }) => (
              <>
                <Building2 size={20} className={isActive ? "text-[#9B0F06]" : "text-black"} />
                Universities
              </>
            )}
          </NavLink>

          <NavLink to="/offers" className={linkStyle}>
            {({ isActive }) => (
              <>
                <Tag size={20} className={isActive ? "text-[#9B0F06]" : "text-black"} />
                Special Offers
              </>
            )}
          </NavLink>

          <NavLink to="/destinations" className={linkStyle}>
            {({ isActive }) => (
              <>
                <Globe size={20} className={isActive ? "text-[#9B0F06] font-extrabold" : "text-black"} />
                Study Destinations
              </>
            )}
          </NavLink>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="border border-[#9B0F06] border-1 px-6 py-3 text-[#9B0F06] font-bold rounded-lg hover:border-[#9B0F06] transition"
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