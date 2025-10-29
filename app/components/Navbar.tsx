"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Rooms", href: "#" },
    { label: "Services", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Contact", href: "#" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // --- CUSTOM COLOR DEFINITIONS ---
  const bgColor = 'bg-[#17181D]'
  const fgColor = 'text-[#fbfbfb]'
  const mutedFgColor = 'text-gray-400' // Using a darker gray for less prominent text

  return (
    // Set the Navbar background and border
    <nav className={`sticky top-0 z-50 ${bgColor} border-b border-gray-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex flex-col items-center py-2">
                {/* 1. Main Heading: King Sukh (Serif) */}
                <h1 
                  className={`text-5xl ${fgColor} leading-none`} 
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  King Sukh
                </h1>
                
                {/* 2. Sub-text: Guest House with Separator */}
                <div 
                  className={`flex items-center text-md uppercase tracking-[.25em] ${mutedFgColor} pt-1 leading-none`}
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  <p>
                    Guest
                  </p>
                  
                  {/* Vertical Separator */}
                  <span 
                    className={`w-px h-3 ${mutedFgColor} mx-3`} // Changed separator color for contrast
                    aria-hidden="true"
                  ></span>
                  
                  <p>
                    House
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Center Navigation - Desktop */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                variants={itemVariants}
                // Apply foreground color here
                className={`text-sm font-medium ${fgColor} hover:text-amber-400 transition-colors duration-300`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Right CTA Button - Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
          >
            <a
              href="#"
              // Button color remains amber for contrast
              className="px-6 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors duration-300"
            >
              Reservations
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 ${fgColor}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className={`px-2 pt-2 pb-4 space-y-2 border-t border-gray-700 ${bgColor}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block px-3 py-2 rounded-lg ${fgColor} hover:bg-gray-700 transition-colors duration-300`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="block w-full px-3 py-2 bg-amber-600 text-white rounded-lg text-center font-medium hover:bg-amber-700 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Reservations
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}