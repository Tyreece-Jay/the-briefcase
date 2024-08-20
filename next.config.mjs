import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: process.env.ASSET_PREFIX || "",
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true 
  }
}

export default withVanillaExtract(nextConfig)