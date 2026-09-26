import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old URLs from the first version of the site, before the Descon-style restructure.
  async redirects() {
    return [
      { source: "/who-we-are", destination: "/about-us", permanent: true },
      { source: "/verticals", destination: "/our-services", permanent: true },
      { source: "/verticals/pipelines-piping", destination: "/our-services/cross-country-pipeline", permanent: true },
      { source: "/verticals/field-surface-facilities", destination: "/our-services/field-surface-facilities", permanent: true },
      { source: "/verticals/hot-tapping-pigging", destination: "/our-services/hot-tapping", permanent: true },
      { source: "/verticals/inspection-ndt", destination: "/our-services/inspection-ndt", permanent: true },
      { source: "/verticals/operations-maintenance", destination: "/our-services/operation-maintenance", permanent: true },
      { source: "/verticals/:slug", destination: "/our-services", permanent: true },
      { source: "/media/arps-conference-paper", destination: "/media/news/arps-conference-paper", permanent: true },
    ];
  },
};

export default nextConfig;
