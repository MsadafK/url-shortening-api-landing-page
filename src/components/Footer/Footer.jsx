export default function Footer() {
  const footerLinks = {
    features: [
      { name: 'Link Shortening', href: '#' },
      { name: 'Branded Links', href: '#' },
      { name: 'Analytics', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Developers', href: '#' },
      { name: 'Support', href: '#' }
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' }
    ]
  };

  const socialIcons = [
    {
      name: 'Facebook',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 2.557C23.117 2.949 22.168 3.213 21.172 3.332C22.189 2.723 22.97 1.758 23.337 0.608C22.386 1.172 21.332 1.582 20.21 1.803C19.313 0.846 18.032 0.248 16.616 0.248C13.437 0.248 11.101 3.214 11.819 6.293C7.728 6.088 4.1 4.128 1.671 1.149C0.381 3.362 1.002 6.257 3.194 7.723C2.388 7.697 1.628 7.476 0.965 7.107C0.911 9.388 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.106C22.505 4.411 23.34 3.544 24 2.557Z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Pinterest',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.360C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0Z"/>
        </svg>
      ),
      href: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"/>
        </svg>
      ),
      href: '#'
    }
  ];

  return (
    <footer className="bg-gray-950 text-white py-14 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 xl:px-32">
        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          {/* Logo */}
          <div className="text-center mb-12 md:mb-10">
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold">Shortly</h2>
          </div>

          {/* Links Sections */}
          <div className="space-y-10 md:space-y-8 text-center mb-12 md:mb-10">
            {/* Features */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-6 md:mb-5">Features</h3>
              <ul className="space-y-3 md:space-y-2">
                {footerLinks.features.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-[0.9375rem] md:text-base">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-6 md:mb-5">Resources</h3>
              <ul className="space-y-3 md:space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-[0.9375rem] md:text-base">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-base md:text-lg mb-6 md:mb-5">Company</h3>
              <ul className="space-y-3 md:space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-[0.9375rem] md:text-base">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 md:gap-6">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white hover:text-blue-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-start">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h2 className="text-[2.5rem] xl:text-[2.625rem] font-bold">Shortly</h2>
          </div>

          {/* Links Grid */}
          <div className="flex gap-16 xl:gap-20">
            {/* Features */}
            <div>
              <h3 className="text-white font-bold text-base mb-6">Features</h3>
              <ul className="space-y-2">
                {footerLinks.features.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-[0.9375rem]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold text-base mb-6">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-[0.9375rem]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold text-base mb-6">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-[0.9375rem]">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white hover:text-blue-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}