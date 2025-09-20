
require('dotenv').config();
const interceptor = require("express-interceptor");
const NodeCache = require("node-cache");

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));


const reviewCache = new NodeCache({ stdTTL: 86400 }); // cache 24h

async function getYelpReviews() {
  try {
    let cached = reviewCache.get("yelpReviews");
    if (cached) return cached;

    const res = await fetch(
      `https://api.yelp.com/v3/businesses/${process.env.YELP_BUSINESS_ID}/reviews`,
      {
        headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
      }
    );
    const data = await res.json();
    // 👇 Log raw response for debugging
    console.log('Yelp API response:', JSON.stringify(data, null, 2));
    const reviews = data.reviews || [];
    
    

    reviewCache.set("yelpReviews", reviews);
    return reviews;
  } catch (err) {
    console.error("Yelp Reviews Error:", err);
    return [];
  }
}

function reviewsInterceptor() {
  return interceptor((req, res) => {
    return {
      isInterceptable: () =>
        res.get("Content-Type") &&
        res.get("Content-Type").includes("text/html"),

      intercept: async (body, send) => {
        const yelpReviews = await getYelpReviews();

        const avgRating =
          yelpReviews.length > 0
            ? (
                yelpReviews.reduce((acc, r) => acc + r.rating, 0) /
                yelpReviews.length
              ).toFixed(1)
            : "5.0";

        // Full LocalBusiness schema with services + Yelp reviews
        const schema = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Reppard's Landscaping",
          "url": "https://yourdomain.com/",
          "logo": "https://yourdomain.com/images/logojr-removebg-preview_bkzx9h.webp",
          "image": "https://yourdomain.com/images/logojr-removebg-preview_bkzx9h.webp",
          "telephone": "+1-510-239-8458",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1234 Sample Street",
            "addressLocality": "Oakland",
            "addressRegion": "CA",
            "postalCode": "94601",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.8044,
            "longitude": -122.2711
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/your-page",
            "https://www.instagram.com/your-handle",
            "https://www.yelp.com/biz/reppards-landscaping-oakland",
            "https://nextdoor.com/pages/your-page"
          ],
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+1-510-239-8458",
            "contactType": "Customer Service",
            "areaServed": "US",
            "availableLanguage": ["English"]
          }],
          "areaServed": [
            { "@type": "Place", "name": "Oakland, CA" },
            { "@type": "Place", "name": "Berkeley, CA" },
            { "@type": "Place", "name": "Alameda, CA" }
          ],
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Garden Installation",
                "description": "Professional garden installation services including soil preparation, planting, and design."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Landscape Design",
                "description": "Custom landscape design services to create beautiful, functional outdoor spaces."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Irrigation Systems",
                "description": "Installation and maintenance of efficient irrigation systems to keep gardens thriving."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fence & Gate Installation",
                "description": "Custom fence and gate design and installation for privacy and curb appeal."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gardening",
                "description": "Ongoing gardening services including pruning, weeding, and seasonal plant care."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Trees & Shrubs Care",
                "description": "Planting, trimming, and care for trees and shrubs to keep landscapes healthy."
              }
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": avgRating,
            "reviewCount": yelpReviews.length
          },
          "review": yelpReviews.map((r) => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.user?.name },
            "datePublished": r.time_created,
            "reviewBody": r.text,
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": r.rating,
              "bestRating": "5"
            }
          }))
        };

        const dynamicScript = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;

        // 🔧 Remove any fallback static schema first
        const cleaned = body.replace(
          /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
          ""
        );

        // Inject Yelp-powered full schema
        const modified = cleaned.replace("</head>", `${dynamicScript}</head>`);

        send(modified);
      },
    };
  });
}

async function reviewsMiddleware(req, res, next) {
  try {
    const { reviews, aggregate } = await getYelpReviews();
    res.locals.reviews = reviews;
    res.locals.aggregate = aggregate;
    next();
  } catch (err) {
    console.error('Error in reviewsMiddleware:', err);
    res.locals.reviews = [];
    res.locals.aggregate = { ratingValue: null, reviewCount: 0 };
    next();
  }
}

module.exports = { reviewsInterceptor, reviewsMiddleware };
