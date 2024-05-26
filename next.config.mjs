/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    basePath: "",
    output: "export",
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'locahost',
                port: '3000',
                pathname: '/',
            },
        ],
    },

};


export default nextConfig;
