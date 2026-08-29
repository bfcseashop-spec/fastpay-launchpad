export const SITE_URL =
  "https://id-preview--a9763442-ff49-4098-9ed1-d969e3ae1267.lovable.app";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
};

export function seoMeta(input: SeoInput) {
  const url = `${SITE_URL}${input.path}`;
  const image = `${SITE_URL}${input.image}`;
  const ogTitle = input.ogTitle ?? input.title;
  const ogDescription = input.ogDescription ?? input.description;

  return [
    { title: input.title },
    { name: "description", content: input.description },
    { property: "og:site_name", content: "Fastpay IT Solution Ltd" },
    { property: "og:type", content: input.ogType ?? "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: ogTitle },
    { property: "og:description", content: ogDescription },
    { property: "og:image", content: image },
    { property: "og:image:width", content: String(input.imageWidth) },
    { property: "og:image:height", content: String(input.imageHeight) },
    { property: "og:image:alt", content: input.imageAlt },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: ogTitle },
    { name: "twitter:description", content: ogDescription },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: input.imageAlt },
  ];
}

export function canonical(path: string) {
  return [{ rel: "canonical", href: `${SITE_URL}${path}` }];
}
