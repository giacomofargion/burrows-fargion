"use client"

import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { getScoreById } from "@/data/scores"
import React, { useEffect, useState } from "react"

export default function ScorePage({ params }: { params: { id: string } }) {
  const [id, setId] = useState<string | null>(null)
  const [modalImage, setModalImage] = useState<string | null>(null)

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

  const score = getScoreById(id)

  if (!score) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8 text-center sm:text-left">Burrows&Fargion</h1>

        <div className="max-w-4xl mx-auto">
          <PageTransition>
            <div className="space-y-6 sm:space-y-8">
              <motion.h2
                className={`text-lg font-medium italic${score.id === 'hands-1995' ? ' mb-4' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {score.title}
              </motion.h2>

              {score.id === 'hands-1995' ? (
                <motion.div
                  className="text-base sm:text-lg leading-relaxed font-serif space-y-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="font-bold italic text-lg mb-2">Hands (1995, 4.5 minutes)</div>
                  <div>Film maker: Adam Roberts</div>
                  <div>Choreographer and performer: Jonathan Burrows</div>
                  <div>Composer: Matteo Fargion</div>
                  <div>Design: Teresa MacCann</div>
                  <div>Lighting: Jack Hazan</div>
                  <div className="mt-4 whitespace-pre-line text-sm sm:text-base font-normal">{score.content.replace(/Film maker:[\s\S]*Lighting: Jack Hazan\n?/, "").trim()}</div>
                </motion.div>
              ) : (
                <motion.div
                  className="text-sm sm:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p>{score.content}</p>
                </motion.div>
              )}

              {/* PDF Link for full score */}
              {score.pdfUrl && (
                <div className="flex flex-col items-center my-6">
                  <a
                    href={score.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                  >
                    <span className="mb-2 text-gray-700 text-center text-base">Click here for the full score</span>
                    <span className="rounded-full border border-gray-400 p-4 flex items-center justify-center transition hover:bg-gray-100">
                      {/* Link SVG icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                    </span>
                  </a>
                </div>
              )}

              <motion.div
                className="mt-8 sm:mt-12 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mx-auto">
                  {score.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="w-[400px] h-[400px] overflow-hidden rounded shadow-md cursor-pointer group mx-auto bg-gray-50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      onClick={() => setModalImage(image)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${score.title} - Image ${index + 1}`}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Modal for expanded image */}
              {modalImage && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                  onClick={() => setModalImage(null)}
                >
                  <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
                    <button
                      className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80"
                      onClick={() => setModalImage(null)}
                      aria-label="Close"
                    >
                      &times;
                    </button>
                    <img
                      src={modalImage}
                      alt="Expanded score image"
                      className="w-full max-h-[80vh] object-contain rounded shadow-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </PageTransition>
        </div>
      </div>
    </div>
  )
}
