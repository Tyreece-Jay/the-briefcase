import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

let path = ''
if(process.env.NODE_ENV == "production"){
  path = "/the-briefcase"
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: path,
  // output: "export",
  // reactStrictMode: true
}

export default withVanillaExtract(nextConfig)