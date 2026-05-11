/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'http',
        hostname: '**',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
