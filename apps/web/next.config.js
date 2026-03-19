/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://100.113.7.79:8080/api/:path*',
            },
        ]
    },
    transpilePackages: ['@budgetflix/ui'],
}

module.exports = nextConfig