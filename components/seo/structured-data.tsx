import type { ReactNode } from "react";

const SITE_URL = "https://www.jyothivermiculite.com";

export function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Jyothi Mines & Minerals",
        url: SITE_URL,
        description:
          "Supplier of exfoliated vermiculite for horticulture, agriculture, construction, industrial and specialised applications.",
        telephone: "+91 9963639482",
        email: "vermiculite.jyothi@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Proddatur",
          addressRegion: "Andhra Pradesh",
          addressCountry: "IN",
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Jyothi Mines & Minerals",
        description: "Exfoliated vermiculite and technical information from Jyothi Mines & Minerals.",
        publisher: { "@id": `${SITE_URL}/#organization` },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export { SITE_URL };
