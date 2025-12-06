export default function MobileNavbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1.5 w-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className="w-full h-0.5 bg-[#9E9AA8]"></span>
        <span className="w-full h-0.5 bg-[#9E9AA8]"></span>
        <span className="w-full h-0.5 bg-[#9E9AA8]"></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 px-6 pt-6">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-3xl font-bold text-[#34313D]">
              Shortly
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex flex-col gap-1.5 w-6"
              aria-label="Close menu"
            >
              <span className="w-full h-0.5 bg-[#9E9AA8]"></span>
              <span className="w-full h-0.5 bg-[#9E9AA8]"></span>
              <span className="w-full h-0.5 bg-[#9E9AA8]"></span>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="bg-[#3A3054] rounded-lg p-8 text-center">
            <div className="flex flex-col gap-6 mb-8">
              <a href="#" className="text-white font-bold text-lg">
                Features
              </a>
              <a href="#" className="text-white font-bold text-lg">
                Pricing
              </a>
              <a href="#" className="text-white font-bold text-lg">
                Resources
              </a>
            </div>

            <div className="border-t border-[#4f4666] pt-8 flex flex-col gap-5">
              <a href="#" className="text-white font-bold text-lg">
                Login
              </a>
              <button className="bg-[#2BD0D0] hover:bg-[#9AE3E3] text-white font-bold py-3 rounded-full text-lg w-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
