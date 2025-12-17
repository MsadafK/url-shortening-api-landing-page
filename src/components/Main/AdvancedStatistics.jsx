import icon1 from '../../assets/brand_recognition_icon.png';
import icon2 from '../../assets/detailed_records_icon.png';
import icon3 from '../../assets/fully_customizable.png';

export default function AdvancedStatistics() {
  const features = [
    {
      icon: icon1,
      title: "Brand Recognition",
      description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
      icon: icon2,
      title: "Detailed Records",
      description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
      icon: icon3,
      title: "Fully Customizable",
      description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    }
  ];

  return (
    <section className="bg-purple-50 px-6 py-20 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-gray-950 text-[1.75rem] md:text-[2.5rem] lg:text-[2.625rem] font-bold mb-4 md:mb-5">
            Advanced Statistics
          </h2>
          <p className="text-gray-500 text-base md:text-[1.125rem] leading-[1.75] max-w-[540px] mx-auto px-2">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>

        {/* Features - Mobile/Tablet (Vertical) */}
        <div className="lg:hidden flex flex-col items-center">
          {features.map((feature, index) => (
            <div key={index} className="relative w-full max-w-[350px] md:max-w-[512px]">
              {/* Feature Card */}
              <div className="bg-white rounded-lg p-8 text-center relative z-10">
                {/* Icon Circle */}
                <div >
                  <img src={feature.icon} alt={feature.title} className="w-[88px] h-[88px] bg-purple-950 rounded-full flex items-center justify-center mx-auto -mt-[60px] mb-8" />
                </div>
                
                <h3 className="text-gray-950 text-[1.375rem] font-bold mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 text-[0.9375rem] md:text-base leading-[1.7]">
                  {feature.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < features.length - 1 && (
                <div className="w-2 h-12 bg-blue-400 mx-auto my-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Features - Desktop (Horizontal) */}
        <div className="hidden lg:flex items-top justify-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative flex-1 max-w-[350px]">
              {/* Feature Card */}
              <div 
                className="bg-white rounded-lg p-8 text-left relative z-10"
                style={{ 
                  marginTop: index === 0 ? '0' : index === 1 ? '44px' : '88px' 
                }}
                >
                {/* Icon Circle */}
                <div>
                  <img src={feature.icon} alt={feature.title} className="w-[88px] h-[88px] bg-purple-950 rounded-full flex items-center justify-center -mt-[80px] mb-8" />
                </div>
                
                <h3 className="text-gray-950 text-[1.375rem] font-bold mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 text-[0.9375rem] leading-[1.7]">
                  {feature.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < features.length - 1 && (
                <div 
                  className="absolute h-2 bg-blue-400 z-0"
                  style={{
                    width: '32px',
                    right: '-32px',
                    top: `calc(40% + ${index === 0 ? '22px' : index === 1 ? '22px' : '44px'})`
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}