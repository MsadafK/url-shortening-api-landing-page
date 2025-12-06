import workingImage from "../../assets/working-with-computer.jpg";

export default function HeroSection() {
  return (
    <section className="pl-6 pt-8 pb-16 md:pl-24 md:pt-12 md:pb-24 lg:pl-32 lg:pt-16 lg:pb-32 overflow-hidden">
      <div className="flex flex-col md:flex-row-reverse md:items-center md:gap-12 lg:gap-20">
        {/* Illustration - Right side on desktop, top on mobile */}
        <div className="md:flex-1 -mx-6 md:mx-0 mb-9 md:mb-0 relative">
          <img
            src={workingImage}
            alt="Illustration of a person working on a computer"
            className="w-full h-auto"
          />
        </div>

        {/* Content - Left side on desktop */}
        <div className="md:flex-1 text-center md:text-left">
          <h1 className="text-[2.625rem] md:text-[3.25rem] lg:text-[5rem] font-bold text-[#34313D] leading-[1.15] md:leading-[1.1] lg:leading-[1.05] mb-4 md:mb-1 lg:mb-2">
            More than just shorter links
          </h1>
          <p className="text-[#9E9AA8] text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] mb-8 md:mb-9 lg:mb-10 leading-[1.7] md:leading-[1.65] lg:leading-[1.6] px-1 md:px-0 md:pr-8 lg:pr-16">
            Build your brand's recognition and get detailed insights on how your links are performing.
          </p>
          <button className="bg-[#2BD0D0] hover:bg-[#9AE3E3] transition-colors text-white font-bold px-10 py-[0.875rem] rounded-full text-[1.125rem] md:text-[1.125rem]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

