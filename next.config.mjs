/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
    additionalData: `@use "@/styles/functions" as *;`,
  },
  images: {
		domains: ["backend-casaselvagio.local"],
		unoptimized: true,
    formats: ['image/avif', 'image/webp'],
	},
  
};

export default nextConfig;
