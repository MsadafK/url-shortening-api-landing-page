import React from 'react'
import HeroSection from './HeroSection.jsx'
import UrlShortener from './UrlShortener.jsx'

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
      <div className="mt-20 md:mt-24 lg:mt-28">
        {/* Next sections will go here */}
      </div>
    </>
  )
}

export default Main