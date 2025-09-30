"use client"

import { useState } from "react"
import { PortfolioItem } from "./portfolio-item"
import { ImageLightbox } from "./image-lightbox"

const portfolioItems = [
  {
    id: 1,
    category: "Hardscape",
    image: "/stone-patio-hardscape-landscaping.webp",
    description: "Patio with tile slab and miniature rock bed in perimeter in Oakland.",
  },
  {
    id: 2,
    category: "Softscape",
    image: "/lush-garden-softscape-planting.jpg",
    description: "Perennial garden with native plants",
  },
  {
    id: 3,
    category: "Garden Features",
    image: "/garden-feature-trellis.jpg",
    description: "rosewood pergola swing",
  },
  {
    id: 4,
    category: "Outdoor Living",
    image: "/outdoor-patio-living-space.jpg",
    description: "Artificial Grass Backyard Ideas | Low-Maintenance Outdoor Living Space",
  },
  {
    id: 5,
    category: "Garden Design",
    image: "/formal-garden-design-landscaping.jpg",
    description: "Formal garden with structured plantings",
  },
  {
    id: 6,
    category: "fence",
    image: "/fence-gate-landscaping-feature.jpg",
    description: "Modern Wooden Slat Privacy Fence | Stylish Outdoor Privacy Design",
  },
  {
    id: 7,
    category: "Lighting",
    image: "/landscape-lighting-garden-night.jpg",
    description: "Backyard Pergola with String Lights | Outdoor Living & Garden Lighting",
  },
  {
    id: 8,
    category: "Retaining Walls",
    image: "/stone-retaining-wall-landscaping.jpg",
    description: "Terraced retaining wall system",
  },
]

export function PortfolioGrid() {
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null)

  return (
    <>
      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Our Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={item.id}
                item={item}
                onClick={() => setSelectedImage(item)}
                className={
                  index === 0
                    ? "md:col-span-2 md:row-span-2"
                    : index === 3
                      ? "lg:col-span-2"
                      : index === 5
                        ? "md:row-span-2"
                        : ""
                }
              />
            ))}
          </div>
        </div>
      </section>

      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  )
}
