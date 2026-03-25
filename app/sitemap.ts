import type { MetadataRoute } from "next";

const BASE_URL = "https://raginnovations.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/products",
    "/gallery",
    "/pricing",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
