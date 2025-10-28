"use client"

import { motion } from "framer-motion"
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Home,
  DoorOpen,
  ImageIcon,
  Sparkles,
  PhoneIcon,
  Star,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  }

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      ariaLabel: "Visit our Facebook page",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/kingsukhguesthouse/",
      ariaLabel: "Visit our Instagram profile",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      ariaLabel: "Follow us on Twitter",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "#",
      ariaLabel: "Subscribe to our YouTube channel",
    },
  ]

  const quickLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Rooms", href: "/rooms", icon: DoorOpen },
    { label: "Gallery", href: "/gallery", icon: ImageIcon },
    { label: "Amenities", href: "/amenities", icon: Sparkles },
    { label: "Review Ratings", href: "/reviews", icon: Star },
    { label: "Contact", href: "/contact", icon: PhoneIcon },
  ]

  return (
    <footer className="bg-slate-900 text-slate-100">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-white">King Sukh</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Experience luxury and comfort at our premium guest house. Your perfect getaway awaits.
            </p>
          </motion.div>

          <motion.nav variants={itemVariants} className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-amber-400"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span className="text-sm">{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.nav>

          <motion.address variants={itemVariants} className="space-y-3 not-italic">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://maps.google.com/?q=King+Sukh+Guest+House"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-amber-400"
                  aria-label="View our location on Google Maps"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">123 Luxury Lane, Paradise City</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-amber-400"
                  aria-label="Call us"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kingsukh.com"
                  className="inline-flex items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-amber-400"
                  aria-label="Send us an email"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm">info@kingsukh.com</span>
                </a>
              </li>
            </ul>
          </motion.address>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-800 text-slate-300 transition-all duration-200 hover:bg-amber-400 hover:text-slate-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </motion.a>
                )
              })}
            </div>
            <motion.div className="pt-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="https://api.whatsapp.com/send?phone=919007062180"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-amber-400 text-slate-900 font-semibold rounded-lg transition-all duration-200 hover:bg-amber-300 shadow-lg hover:shadow-xl"
                aria-label="Book your stay now"
              >
                <span>Book Now</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="my-8 border-t border-slate-700" aria-hidden="true" />

        <motion.div
          variants={itemVariants}
          className="items-center justify-between gap-4 text-center text-sm text-slate-400 sm:flex-row"
        >
          <p>&copy; {currentYear} King Sukh Guest House. All rights reserved.</p>
          
        </motion.div>
      </motion.div>
    </footer>
  )
}
