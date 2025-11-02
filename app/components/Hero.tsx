"use client"

import { useState, useEffect } from "react"

const hotelImages = [
  {
    url: "/assets/1.jpg",
    alt: "Luxury hotel room",
  },
  {
    url: "/assets/baranti.webp",
    alt: "Hotel lobby",
  },
  {
    url: "/assets/palash.webp",
    alt: "Resort pool",
  },
  {
    url: "/assets/header.jpg",
    alt: "Restaurant",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hotelImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? hotelImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % hotelImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {hotelImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading={index === currentIndex ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Rating Badge */}
        <div className="mb-6 flex items-center gap-2 text-white/90">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-xl">
                ★
              </span>
            ))}
          </div>
          <span className="text-sm font-medium">(5.0)</span>
        </div>

        {/* Tagline */}
        <p className="mb-4 text-sm sm:text-base tracking-widest text-white/80 uppercase font-light">
          • Modern Luxury and Timeless Living •
        </p>

        {/* Main Heading */}
        <h1 className="mb-8 text-4xl sm:text-5xl lg:text-7xl font-serif text-white text-center text-balance leading-tight">
          Make yourself at HOME in our GUEST HOUSE
        </h1>

        {/* CTA Button */}
        <button
          onClick={() => {
            // Handle booking action
            console.log("Book now clicked")
          }}
          className="px-8 py-3 sm:px-10 sm:py-4 bg-yellow-700 hover:bg-yellow-500 font-sans font-semibold rounded-md transition-colors duration-300 uppercase tracking-wide text-sm sm:text-base"
          aria-label="Book apartments now"
        >
          Book Apartments
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {hotelImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-white w-8 h-2 sm:w-10 sm:h-2.5"
                : "bg-white/50 w-2 h-2 sm:w-2.5 sm:h-2.5 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </section>
  )
}
