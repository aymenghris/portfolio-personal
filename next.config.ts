import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "imageplaceholder.net",
            },
        ],
    },
}

export default nextConfig
