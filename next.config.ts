import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [], // Añade aquí los dominios permitidos si usas imágenes externas
  },
  experimental: {
    appDir: true,
},
};
export default nextConfig;
