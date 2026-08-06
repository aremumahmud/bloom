/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },
  compress: true,
  poweredByHeader: false,
  // Prevent Next.js from issuing 302 redirects for trailing slashes
  trailingSlash: false,
  async redirects() {
    return [
      // Old /services/[city] → /locations (301 permanent)
      { source: '/services/prosper',       destination: '/locations',               permanent: true },
      { source: '/services/frisco',        destination: '/locations',               permanent: true },
      { source: '/services/mckinney',      destination: '/locations',               permanent: true },
      { source: '/services/allen',         destination: '/locations',               permanent: true },
      { source: '/services/celina',        destination: '/locations',               permanent: true },
      { source: '/services/aubrey',        destination: '/locations',               permanent: true },
      { source: '/services/little-elm',    destination: '/locations',               permanent: true },
      { source: '/services/the-colony',    destination: '/locations',               permanent: true },
      { source: '/services/service-areas', destination: '/locations',               permanent: true },
      // DFW location pages no longer served → redirect to locations hub
      { source: '/locations/prosper-tx',   destination: '/locations',               permanent: true },
      { source: '/locations/frisco-tx',    destination: '/locations',               permanent: true },
      { source: '/locations/mckinney-tx',  destination: '/locations',               permanent: true },
      { source: '/locations/allen-tx',     destination: '/locations',               permanent: true },
      { source: '/locations/celina-tx',    destination: '/locations',               permanent: true },
      { source: '/locations/aubrey-tx',    destination: '/locations',               permanent: true },
      { source: '/locations/little-elm-tx',destination: '/locations',               permanent: true },
      { source: '/locations/the-colony-tx',destination: '/locations',               permanent: true },
      // Plain slug variants → locations hub
      { source: '/locations/prosper',      destination: '/locations',               permanent: true },
      { source: '/locations/frisco',       destination: '/locations',               permanent: true },
      { source: '/locations/mckinney',     destination: '/locations',               permanent: true },
      { source: '/locations/allen',        destination: '/locations',               permanent: true },
      { source: '/locations/celina',       destination: '/locations',               permanent: true },
      { source: '/locations/aubrey',       destination: '/locations',               permanent: true },
      { source: '/locations/little-elm',   destination: '/locations',               permanent: true },
      { source: '/locations/the-colony',   destination: '/locations',               permanent: true },
    ]
  },
}

module.exports = nextConfig
