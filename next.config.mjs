import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/the-briefcase",
  // output: "export",
  // reactStrictMode: true,
}

export default withVanillaExtract(nextConfig)