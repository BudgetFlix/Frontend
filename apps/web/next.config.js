/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://100.113.7.79/api/:path*',
            },
            {
                source: '/stream/:path*',
                destination: 'http://100.113.7.79/stream/:path*',
            },
        ]
    },
    transpilePackages: ['@budgetflix/ui'],
}

module.exports = nextConfig