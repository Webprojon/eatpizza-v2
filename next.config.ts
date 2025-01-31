import withPWA from "next-pwa";

const nextConfig = {
	//distDir: "build",
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		removeConsole: process.env.NODE_ENV !== "development",
	},
};

export default withPWA({
	dest: "public",
	register: true,
	skipWaiting: true,
	buildExcludes: [/app-build-manifest.json$/],
})(nextConfig);
