import React from 'react'
import HeroSection from './HeroSection.jsx'
import UrlShortener from './UrlShortener.jsx'
import AdvancedStatistics from './AdvancedStatistics.jsx'

export const Main = () => {
  return (
    <>
      <div className="relative">
        <HeroSection/>
        <div className="absolute left-0 right-0 top-full -translate-y-1/2 z-10">
          <UrlShortener/>
        </div>
      </div>
      
      {/* Future sections yahan add honge */}
      <div >
        {/* Next sections will go here */}
        <AdvancedStatistics />
      </div>
    </>
  )
}

export default Main