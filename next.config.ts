import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/core/i18n/i18n.ts");

const nextConfig: NextConfig = {
  output: "export",
  // Optional: Add images config if using Next.js Image
  images: {
    unoptimized: true, // Required for static export
  },
};

export default withNextIntl(nextConfig);
