import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true 
  },
  env: {
    RESEND_API_KEY: 're_6VuksH1E_dp9DVpKDsJjXSHhWJVjWcT8a'
  }
}

export default withVanillaExtract(nextConfig)