import Head from 'next/head';
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { Reviews } from "@/components/reviews"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  const domain = "https://reppardslandscaping.com";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "@id": `${domain}/#business`,
    "name": "Reppard's Landscaping",
    "image": `${domain}/images/formal-garden-design-landscaping.jpg`,
    "logo": `${domain}/images/og-default.png`,
    "url": domain,
    "telephone": "(510) 239-8458",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2340 Powell St #367",
      "addressLocality": "Emeryville",
      "addressRegion": "CA",
      "postalCode": "94608",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/reppardslandscaping",
      "https://local.yahoo.com/info-208873856-reppard-s-landscaping-oakland",
      "https://www.houzz.com/professionals/landscape-contractors/reppard-s-landscaping-pfvwus-pf~28221775",
      "https://www.yelp.com/biz/reppards-landscaping-oakland",
      "https://us.nextdoor.com/pages/reppards-landscaping-emeryville-ca/photos/",
      "https://share.google/RQRbiu2IRjHtNnWk6"
    ],
    "areaServed": [
      { "@type": "City", "name": "Oakland" },
      { "@type": "City", "name": "Berkeley" },
      { "@type": "City", "name": "Alameda" },
      { "@type": "City", "name": "Albany" },
      { "@type": "City", "name": "El Cerrito" },
      { "@type": "City", "name": "Piedmont" },
      { "@type": "City", "name": "Emeryville" }
    ],
    "serviceArea": {
      "@type": "Place",
      "geo": { "@type": "GeoShape", "box": "37.69 -122.35 37.91 -122.12" },
      "address": [
        { "@type": "PostalAddress", "addressLocality": "Oakland", "postalCode": "94601" },
        { "@type": "PostalAddress", "addressLocality": "Berkeley", "postalCode": "94704" },
        { "@type": "PostalAddress", "addressLocality": "Alameda", "postalCode": "94501" },
        { "@type": "PostalAddress", "addressLocality": "Albany", "postalCode": "94706" },
        { "@type": "PostalAddress", "addressLocality": "El Cerrito", "postalCode": "94530" },
        { "@type": "PostalAddress", "addressLocality": "Piedmont", "postalCode": "94611" },
        { "@type": "PostalAddress", "addressLocality": "Emeryville", "postalCode": "94608" }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fence and Gate Installation",
          "description": "Professional installation and repair of wood, metal, and composite fences and gates in Oakland, Berkeley, and Alameda.",
          "provider": { "@id": `${domain}/#business` }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gardening Services",
          "description": "Ongoing gardening, seasonal planting, and garden maintenance tailored for Bay Area homes.",
          "provider": { "@id": `${domain}/#business` }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tree and Shrub Care",
          "description": "Pruning, trimming, planting, and removal of trees and shrubs with a focus on plant health.",
          "provider": { "@id": `${domain}/#business` }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landscape Design",
          "description": "Custom landscape design with patios, pavers, irrigation systems, and plant installation.",
          "provider": { "@id": `${domain}/#business` }
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Reppard's Landscaping</title>

        {/* Canonical URL */}
        <link rel="canonical" href={domain} />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Reppard's Landscaping" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={domain} />
        <meta property="og:image" content={`${domain}/public/garden-irrigation-pavers-alameda.jpg`} />
        <meta property="og:description" content="Professional landscaping services in Oakland, Berkeley, Alameda, and surrounding Bay Area cities." />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PortfolioGrid />
      <Reviews />
      <CallToAction />
      <Footer />
    </main>
  )
}
