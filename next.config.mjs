/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
    additionalData: `@use "@/styles/functions" as *;`,
  },
  images: {
		domains: ["backend-casaselvagio.local"],
		unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
  
};

export default nextConfig;
