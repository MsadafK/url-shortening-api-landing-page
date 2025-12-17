import React from 'react'
import HeroSection from './HeroSection.jsx'
import UrlShortener from './UrlShortener.jsx'
import AdvancedStatistics from './AdvancedStatistics.jsx'
import BoostLinksCTA from './BoostLinksCTA.jsx'

export const Main = () => {
  return (
    <>
      <div className="relative">
        <HeroSection/>
      </div>
      
      <div >
        {/* <div className="absolute left-0 right-0 top-full -translate-y-1/2 z-10">
        </div> */}
        <UrlShortener/>
        <AdvancedStatistics />
        <BoostLinksCTA />
      </div>
    </>
  )
}

export default Main