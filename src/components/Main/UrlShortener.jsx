import { useState } from 'react';

export default function UrlShortener() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(false);
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    if (!url.trim()) {
      setError(true);
      return;
    }
    
    // Advanced URL validation function
    const isValidURL = (string) => {
      try {
        // Try to create a URL object - most reliable validation
        const urlObj = new URL(string);
        
        // Check if protocol is http or https
        if (!['http:', 'https:'].includes(urlObj.protocol)) {
          return false;
        }
        
        // Check if hostname exists and is valid
        if (!urlObj.hostname || urlObj.hostname.length === 0) {
          return false;
        }
        
        // Check if hostname has at least one dot (domain.tld)
        if (!urlObj.hostname.includes('.')) {
          return false;
        }
        
        return true;
      } catch (e) {
        // If URL() fails, try adding protocol and validate again
        try {
          const urlWithProtocol = string.startsWith('http') ? string : `https://${string}`;
          const urlObj = new URL(urlWithProtocol);
          
          if (!['http:', 'https:'].includes(urlObj.protocol)) {
            return false;
          }
          
          if (!urlObj.hostname || urlObj.hostname.length === 0) {
            return false;
          }
          
          if (!urlObj.hostname.includes('.')) {
            return false;
          }
          
          return true;
        } catch (e2) {
          return false;
        }
      }
    };
    
    const trimmedUrl = url.trim();
    
    if (!isValidURL(trimmedUrl)) {
      setError(true);
      return;
    }
    
    setError(false);
    setLoading(true);
    
    // Normalize URL (add https:// if missing)
    let normalizedUrl = trimmedUrl;
    if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
      normalizedUrl = `https://${trimmedUrl}`;
    }
    
    try {
      // Use TinyURL API to shorten the URL
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(normalizedUrl)}`);
      const shortenedUrl = await response.text();
      
      const newLink = {
        id: Date.now(),
        original: normalizedUrl,
        shortened: shortenedUrl,
        copied: false
      };
      
      setShortenedLinks([newLink, ...shortenedLinks]);
      setUrl('');
    } catch (error) {
      console.error('Error shortening URL:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setShortenedLinks(links =>
      links.map(link =>
        link.id === id ? { ...link, copied: true } : link
      )
    );
    
    setTimeout(() => {
      setShortenedLinks(links =>
        links.map(link =>
          link.id === id ? { ...link, copied: false } : link
        )
      );
    }, 2000);
  };

  return (
    <div className="border-2 border-purple-50  bg-purple-50 w-full px-6 lg:px-24 xl:px-32 ">
      {/* Shortener Input Box */}
      <div className="bg-purple-950 rounded-lg p-6 md:p-8 lg:p-12 relative overflow-hidden -pt-0 pb-12 -mt-24 md:-mt-16 lg:-mt-22">
        {/* Background SVG - Top Right */}
        <svg 
          
          className="absolute bottom-0 left-0 w-[40%] md:w-[35%] lg:w-[32%] h-auto md:h-[100%]"
          viewBox="0 0 582 139" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M-134 90.0765C-134 142.8 -118.5 180.562 -61 204.953C-3.5 229.344 52.055 207.087 107.786 219.847C163.517 232.608 163.517 314.809 216 365.396C268.483 415.983 379.142 428.27 469.119 376.948C559.096 325.626 599.885 205.796 573 135.141C546.115 64.4854 494.593 0 246 0C-2.59314 0 -134 37.3533 -134 90.0765Z" fill="#EFF1F7"/>
        </svg>

        {/* Background SVG - Bottom Left */}
        <svg 
          className="absolute top-0 right-0 w-[50%] md:w-[45%] lg:w-[40%] h-auto md:h-[100%]"
          viewBox="0 0 467 168" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_84139_885)">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 -93.9235C4 -41.2004 19.5 -3.43848 77 20.9529C134.5 45.3442 190.055 23.0865 245.786 35.847C301.517 48.6075 301.517 130.809 354 181.396C406.483 231.983 517.142 244.27 607.119 192.948C697.096 141.626 737.885 21.7965 711 -48.8591C684.115 -119.515 632.593 -184 384 -184C135.407 -184 4 -146.647 4 -93.9235Z" fill="#EFF1F7"/>
          </g>
          <defs>
            <filter id="filter0_d_84139_885" x="0" y="-184" width="723.161" height="417.906" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_84139_885"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_84139_885" result="shape"/>
            </filter>
          </defs>
        </svg>

        <div className="absolute inset-0 bg-purple-950 opacity-95 rounded-lg"></div>
        
        <div className="relative flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex-1">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setError(false);
              }}
              placeholder="Shorten a link here..."
              className={`bg-white w-full px-6 py-3 md:py-4 lg:py-5 rounded-lg text-base md:text-lg outline-none ${
                error ? 'border-3 border-red-400' : 'border-0'
              }`}
            />
            {error && (
              <p className="text-red-400 text-xs md:text-sm mt-2 italic">
                Please add a link
              </p>
            )}
          </div>
          
          <button
            onClick={handleShorten}
            disabled={loading}
            className={`${
              loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-400 hover:bg-blue-300 cursor-pointer'
            } text-white font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 lg:py-5 rounded-lg whitespace-nowrap transition-colors`}
          >
            {loading ? 'Shortening...' : 'Shorten it!'}
          </button>
        </div>
      </div>

      {/* Shortened Links Results */}
      {shortenedLinks.length > 0 && (
        <div className="mt-6 space-y-4">
          {shortenedLinks.map((link) => (
            <div
              key={link.id}
              className="bg-white rounded-lg p-4 md:p-5 lg:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6 shadow-sm"
              >
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6 border-b md:border-b-0 pb-3 md:pb-0">
              <p className="text-gray-950 text-sm md:text-base lg:text-lg truncate max-w-[200px] md:max-w-[300px] lg:max-w-[400px]">
                {link.original}
              </p>
              
              <p className="text-blue-400 text-sm md:text-base lg:text-lg font-medium">
                {link.shortened}
              </p>
            </div>
              
              <button
                onClick={() => handleCopy(link.id, link.shortened)}
                className={`${
                  link.copied ? 'bg-purple-950' : 'bg-blue-400 hover:bg-blue-300'
                } text-white font-bold text-sm md:text-base px-6 md:px-8 lg:px-10 py-2 md:py-3 rounded-lg transition-colors whitespace-nowrap cursor-pointer`}
              >
                {link.copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}