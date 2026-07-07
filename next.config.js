/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },
  compress: true,
  async redirects() {
    return [
      // Old /services/[city] → /locations/[city]-tx (301 permanent)
      { source: '/services/prosper',       destination: '/locations/prosper-tx',    permanent: true },
      { source: '/services/frisco',        destination: '/locations/frisco-tx',     permanent: true },
      { source: '/services/mckinney',      destination: '/locations/mckinney-tx',   permanent: true },
      { source: '/services/allen',         destination: '/locations/allen-tx',      permanent: true },
      { source: '/services/celina',        destination: '/locations/celina-tx',     permanent: true },
      { source: '/services/aubrey',        destination: '/locations/aubrey-tx',     permanent: true },
      { source: '/services/little-elm',    destination: '/locations/little-elm-tx', permanent: true },
      { source: '/services/the-colony',    destination: '/locations/the-colony-tx', permanent: true },
      { source: '/services/service-areas', destination: '/locations',               permanent: true },
      // Plain /locations/[city] → /locations/[city]-tx
      { source: '/locations/prosper',      destination: '/locations/prosper-tx',    permanent: true },
      { source: '/locations/frisco',       destination: '/locations/frisco-tx',     permanent: true },
      { source: '/locations/mckinney',     destination: '/locations/mckinney-tx',   permanent: true },
      { source: '/locations/allen',        destination: '/locations/allen-tx',      permanent: true },
      { source: '/locations/celina',       destination: '/locations/celina-tx',     permanent: true },
      { source: '/locations/aubrey',       destination: '/locations/aubrey-tx',     permanent: true },
      { source: '/locations/little-elm',   destination: '/locations/little-elm-tx', permanent: true },
      { source: '/locations/the-colony',   destination: '/locations/the-colony-tx', permanent: true },
    ]
  },
}

module.exports = nextConfig
