/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                },
            ],
        });
        return config;
    },
    images: {
        disableStaticImages: true, // importした画像の型定義設定を無効にする
    },
    reactStrictMode: true,
}

const { withKumaUI } = require("@kuma-ui/next-plugin");

module.exports = withKumaUI(nextConfig)
