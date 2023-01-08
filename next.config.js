/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/kofi',
                destination: 'https://ko-fi.com/prakharshukla',
                permanent: true,
                basePath: false,
            },
            {
                source: '/git',
                destination: 'https://github.com/imprakharshukla',
                permanent: true,
                basePath: false,
            },
            {
                source: '/cc',
                destination: 'https://codechef.com/users/imprakharshukl',
                permanent: true,
                basePath: false,
            },
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/iamprakharshukla/',
                permanent: true,
                basePath: false,
            },
            {
                source: '/lc',
                destination: 'https://leetcode.com/imprakharshukla',
                permanent: true,
                basePath: false,
            },
            {
                source: '/twitter',
                destination: 'https://twitter.com/imprakharshukl',
                permanent: true,
                basePath: false,
            },
        ];
    },
    reactStrictMode: false,
    swcMinify: true,
    webpack: (config, {isServer}) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        return config;
    }
}

module.exports = nextConfig
