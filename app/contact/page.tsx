"use client"

import Navigation from "@/components/navigation"
import PageHeader from "@/components/page-header"
import PageTransition from "@/components/page-transition"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4">
        <PageHeader />

        <div className="max-w-4xl mx-auto">
          <PageTransition>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                verloren198(at)gmail.com
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                matteofargion(at)gmail.com
              </motion.p>
            </div>
          </PageTransition>
        </div>
      </div>
    </div>
  )
}
