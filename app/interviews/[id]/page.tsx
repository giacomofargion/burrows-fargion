"use client"

import Navigation from "@/components/navigation"
import PageHeader from "@/components/page-header"
import PageTransition from "@/components/page-transition"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { getInterviewById } from "@/data/interviews"
import React, { useEffect, useState } from "react"

export default function InterviewPage({ params }: { params: { id: string } }) {
  const [id, setId] = useState<string | null>(null)

  useEffect(() => {
    const resolveParams = async () => {
      if (params && typeof (params as any).then === 'function') {
        const resolved = await (params as unknown as Promise<{ id: string }>)
        setId(resolved.id)
      } else {
        setId((params as { id: string }).id)
      }
    }
    resolveParams()
  }, [params])

  if (!id) {
    return <div>Loading...</div>
  }

  const interview = getInterviewById(id)

  if (!interview) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4">
        <PageHeader />

        <div className="max-w-4xl mx-auto">
          <PageTransition>
            <div className="space-y-6">
              <motion.h2
                className="text-lg font-bold italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {interview.header}
              </motion.h2>
              <motion.div
                className="text-sm sm:text-base leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p>{interview.content}</p>
              </motion.div>
            </div>
          </PageTransition>
        </div>
      </div>
    </div>
  )
}
