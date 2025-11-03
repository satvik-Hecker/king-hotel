"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AboutUs() {
  const [positive, setPositive] = useState(0)
  const [years, setYears] = useState(0)
  const [clients, setClients] = useState(0)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    const animate = (target: number, setter: (v: number) => void, duration = 900) => {
      const start = Date.now()
      const initial = 0
      const tick = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(1, elapsed / duration)
        const value = Math.round(initial + (target - initial) * easeOutCubic(progress))
        setter(value)
        if (progress < 1) requestAnimationFrame(tick)
      }
      tick()
    }

    animate(80, setPositive, 1200)
    animate(100, setYears, 1100)
    animate(150, setClients, 1400)
  }, [])

  const formatClients = (n: number) => {
    if (n >= 1000) return `${Math.round(n / 1000)}K`
    return String(n)
  }

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-16 bg-[#ffffff]">
      <div className="flex flex-col gap-10 items-center">

        {/* About Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-24 px-2 sm:px-6 lg:px-24">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-0.5" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="22" stroke="black" strokeWidth="6" />
                <circle cx="32" cy="32" r="13" fill="black" />
              </svg>
              <span className="text-sm sm:text-base font-mono tracking-wider font-bold text-slate-800 uppercase">
                About us
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-3xl sm:text-4xl md:text-5xl text-gray-300 max-w-[900px] mx-auto font-mono font-medium text-left md:text-right">
                The Best Holidays Start Here!
              </h3>

              <div className="inline-block mt-4">
                <p
                  className={`text-sm sm:text-base md:text-lg font-bold tracking-wider font-mono text-gray-700 max-w-5xl mb-2 transition-all duration-500 ease-in-out ${
                    showMore ? "line-clamp-none" : "line-clamp-4"
                  }`}
                >
                  Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature&apos;s beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
                </p>

                <button
                  onClick={() => setShowMore(!showMore)}
                  className="text-xs sm:text-sm tracking-wider font-mono font-medium text-black inline-flex items-center gap-1 relative group"
                >
                  {showMore ? "SHOW LESS" : "KNOW MORE"}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform duration-300 ${showMore ? "rotate-180" : "translate-x-0 group-hover:translate-x-1"}`}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Numbers Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="w-full"
        >
          <div className="w-full px-2 sm:px-6 lg:px-24 mt-10">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="22" stroke="black" strokeWidth="6" />
                <circle cx="32" cy="32" r="13" fill="black" />
              </svg>
              <span className="text-sm sm:text-base font-mono tracking-wider font-bold text-slate-800 uppercase">
                By the numbers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1400px] mx-auto">
              <StatCard title="Positive Feedback" desc="Backed by 80% satisfied users, we continue to grow with the confidence and trust of our community." value={`${positive}%`} />
              <StatCard title="Bookings Completed" desc="Crossing 100+ bookings is more than a milestone — it’s a testament to your trust and our dedication." value={`${years}+`} />
              <StatCard title="Happy Clients" desc="From one to over 150 happy customers — thank you for believing in what we do." value={`${formatClients(clients)}+`} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ title, desc, value }: { title: string; desc: string; value: string }) {
  return (
    <div className="bg-[#f2f2f0] font-mono p-6 shadow-sm border rounded-none">
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black">
        {value}
      </div>
      <h3 className="mt-1 text-base sm:text-lg font-semibold text-black">{title}</h3>
      <p className="mt-2 text-xs sm:text-sm font-semibold text-gray-600">{desc}</p>
    </div>
  )
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}
