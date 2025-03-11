/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ui', 'ui-sitecore'],
  output: "standalone",  
}

module.exports = nextConfig
