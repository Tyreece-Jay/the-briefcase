import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV == "production" ? "/the-briefcase" : undefined,
  assetPrefix: process.env.NODE_ENV == "production" ? "/the-briefcase" : undefined,
  output: "export",
  reactStrictMode: true
}

export default withVanillaExtract(nextConfig)