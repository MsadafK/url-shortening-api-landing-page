import desktopTop from '../../assets/d-top.png'
import desktopBottom from '../../assets/d-bottom.png'
import desktopTopRight from '../../assets/d-t-right.png'
import tabletTop from '../../assets/t-top.png'
import tabletBottom from '../../assets/t-bottom.png'
import mobileTop from '../../assets/m-top.png'
import mobileBottom from '../../assets/m-bottom.png'

export default function BoostLinksCTA() {
  return (
    <section className="bg-purple-950 relative overflow-hidden py-14 md:py-16 lg:py-20">
      {/* Mobile Background Images */}
      <img 
        src={mobileTop}
        alt=""
        className="absolute top-0 right-0 w-auto h-auto md:hidden"
      />
      <img 
        src={mobileBottom}
        alt=""
        className="absolute bottom-0 left-0 w-auto h-auto md:hidden"
      />

      {/* Tablet Background Images */}
      <img 
        src={tabletTop}
        alt=""
        className="hidden md:block lg:hidden absolute top-0 left-0 w-auto h-auto"
      />
      <img 
        src={tabletBottom}
        alt=""
        className="hidden md:block lg:hidden absolute bottom-0 left-0 w-auto h-auto"
      />

      {/* Desktop Background Images */}
      <img 
        src={desktopTop}
        alt=""
        className="hidden lg:block absolute top-0 left-0 w-auto h-auto"
      />
      <img 
        src={desktopTopRight}
        alt=""
        className="hidden xl:block absolute top-0 right-0 w-[45%] h-full"
      />
      <img 
        src={desktopBottom}
        alt=""
        className="hidden lg:block absolute bottom-0 left-0 w-auto h-auto"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-white text-[1.75rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.625rem] font-bold mb-6 md:mb-8">
          Boost your links today
        </h2>
        
        <button className="bg-blue-400 hover:bg-blue-300 transition-colors text-white font-bold text-base md:text-lg lg:text-xl px-10 md:px-12 py-3 md:py-[0.875rem] rounded-full cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
}