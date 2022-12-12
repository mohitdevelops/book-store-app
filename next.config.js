/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['itbook.store'],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "itbook.store",
				port: "",
				pathname: "/img/books/**",
			},
		],
	},
};

module.exports = nextConfig;
