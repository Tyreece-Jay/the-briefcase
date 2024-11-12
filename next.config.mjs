import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true 
  },
  env: {
    RESEND_API_KEY: ''
  }
}

export default withVanillaExtract(nextConfig)