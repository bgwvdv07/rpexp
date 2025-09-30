"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PortfolioItemProps {
  item: {
    id: number
    category: string
    image: string
    description: string
  }
  onClick: () => void
  className?: string
}

export function PortfolioItem({ item, onClick, className }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg cursor-pointer group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.description}
        fill
        className={cn("object-cover transition-all duration-500", isHovered ? "scale-110" : "scale-100")}
      />

      <div
        className={cn(
          "absolute inset-0 bg-primary/90 flex items-center justify-center transition-opacity duration-300",
          isHovered ? "opacity-0" : "opacity-100",
        )}
      >
        <h3 className="font-sans text-2xl md:text-3xl font-bold text-primary-foreground text-center px-4">
          {item.category}
        </h3>
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent flex items-end p-6 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <p className="text-background font-medium text-sm">{item.description}</p>
      </div>
    </div>
  )
}
