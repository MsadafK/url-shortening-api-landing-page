import { useState } from 'react';
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="px-6 py-6 md:px-24 lg:px-32 flex items-center justify-between">
        <div className="flex items-center justify-between gap-12 ">
          {/* Logo */}
          <div className="text-3xl font-bold text-[#34313D]">
            Shortly
          </div>
          {/* Desktop Navbar */}
          <DesktopNavbar />
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[#9E9AA8] hover:text-[#34313D] font-medium text-sm">
            Login
          </a>
          <button className="bg-[#2BD0D0] hover:bg-[#9AE3E3] text-white font-bold px-6 py-3 rounded-full text-sm">
            Sign Up
          </button>
        </div>

        {/* Mobile Navbar */}
        <MobileNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </header>
  );
}
