"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AboutUs() {
  const [positive, setPositive] = useState(0)
  const [years, setYears] = useState(0)
  const [clients, setClients] = useState(0)

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

    animate(98, setPositive, 1200)
    animate(15, setYears, 1100)
    animate(25000, setClients, 1400)
  }, [])

  const formatClients = (n: number) => {
    if (n >= 1000) return `${Math.round(n / 1000)}K`
    return String(n)
  }

  return (
    <section className="max-w-full px-6 md:px-8 py-16  bg-[#ffffff]">
      <div className="flex flex-col gap-10 items-center ">
        
        <motion.div
          
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
            <div className="flex gap-24">
                <div className="flex  gap-1">
                  <svg
                    className="w-5 h-5 mt-0.5"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="32" cy="32" r="22" stroke="black" strokeWidth="6" />
                    <circle cx="32" cy="32" r="13" fill="black" />
                </svg>
                <span className="text-[16px] font-mono tracking-wider font-bold text-slate-800 uppercase">
                    About us
                </span>
                </div>


                {/* <span className="text-gray-500 font-medium block text-lg sm:text-xl lg:text-xl mb-1">Since 2016, weve been helping travelers find stays they love — effortlessly.</span> */}
          {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-extrabold text-ink mb-6" style={{ fontWeight: 800 }}>
            we’re about curating unforgettable journeys!
          </h2> */}
          <div>
          <h3 className="text-5xl text-right text-gray-300 max-w-[1000px] font-mono font-medium">The Best Holidays Start Here!</h3>
          <p className="text-2xl  text-gray-700 max-w-5xl mb-6">
           Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature&apos;s beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
          </div>

          {/* <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:underline"
            aria-label="Know more about us"
          >
            KNOW MORE
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a> */}
          </div>
        </motion.div>

        {/* Right: stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          {/* Card 1 */}
          <StatCard title="Positive Feedback" desc="Over 98% positive feedback from satisfied guests, reflecting our commitment to exceptional service and memorable stays." value={`${positive}%`} highlight />

          {/* Card 2 */}
          <StatCard title="Years of Expertise" desc="Backed by 15 years of industry expertise, we turn every stay into a seamless experience." value={`${years}+`} />

          {/* Card 3 */}
          <StatCard title="Happy Clients" desc="Proudly serving 25K+ happy travelers who've trusted us to find their perfect stay." value={`${formatClients(clients)}+`} />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ title, desc, value, highlight = false }: { title: string; desc: string; value: string; highlight?: boolean }) {
  return (
    <div className="bg-muted-bg rounded-2xl p-6 shadow-sm border border-transparent">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="text-5xl sm:text-6xl font-extrabold leading-none text-ink flex items-baseline gap-2">
            <span>{value}</span>
            <span className="text-gold text-2xl" aria-hidden>
              +
            </span>
          </div>
        </div>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

// Easing
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

