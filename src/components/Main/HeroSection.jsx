import workingImage from "../../assets/working-with-computer.jpg";

export default function HeroSection() {
  return (
    <section className="px-6 pt-8 pb-16 lg:pl-24 lg:pt-12 lg:pb-24 lg:pr-0 xl:pl-32 xl:pt-16 xl:pb-32 overflow-hidden">
      <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12 xl:gap-20">
        {/* Illustration - Right side on desktop, top on mobile */}
        <div className="lg:flex-1 -mx-6 lg:mx-0 mb-9 lg:mb-0 relative">
          <img
            src={workingImage}
            alt="Illustration of a person working on a computer"
            className="w-[93.5%] ml-auto h-auto md:w-[85%] lg:w-full"
          />
        </div>

        {/* Content - Left side on desktop */}
        <div className="md:w-[60%] md:mx-auto lg:flex-1 text-center lg:text-left">
          <h1 className="text-[2.625rem] md:text-[3.75rem] lg:text-[3.25rem] xl:text-[5rem] font-bold text-[#34313D] leading-[1.15] lg:leading-[1.1] xl:leading-[1.05] mb-4 lg:mb-1 xl:mb-2">
            More than just shorter links
          </h1>
          <p className="text-[#9E9AA8] text-[1.3rem] md:text-[1.2rem] lg:text-[1.25rem] xl:text-[1.375rem] mb-8 lg:mb-9 xl:mb-10 leading-[1.7] lg:leading-[1.65] xl:leading-[1.6] px-1 lg:px-0 xl:pr-8 xl:pr-16">
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

