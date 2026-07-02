import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/Yusuf_Uysal_CV.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
