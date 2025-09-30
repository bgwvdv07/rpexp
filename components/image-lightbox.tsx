"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface ImageLightboxProps {
  image: {
    category: string
    image: string
    description: string
  } | null
  onClose: () => void
}

export function ImageLightbox({ image, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (image) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [image])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6 text-background" />
      </button>

      <div className="relative max-w-5xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
        <Image src={image.image || "/placeholder.svg"} alt={image.description} fill className="object-contain" />

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground to-transparent p-6">
          <h3 className="text-background font-bold text-xl mb-2">{image.category}</h3>
          <p className="text-background/80 text-sm">{image.description}</p>
        </div>
      </div>
    </div>
  )
}
