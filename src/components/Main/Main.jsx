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
      
      <div className="">
        <UrlShortener/>
        <AdvancedStatistics />
        <BoostLinksCTA />
      </div>
    </>
  )
}

export default Main