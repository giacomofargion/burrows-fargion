"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { getAllScores } from "@/data/scores"
import { getAllInterviews } from "@/data/interviews"

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scoresOpen, setScoresOpen] = useState(false)
  const [interviewsOpen, setInterviewsOpen] = useState(false)

  const scores = getAllScores()
  const interviews = getAllInterviews()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setScoresOpen(false)
    setInterviewsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-700 hover:opacity-60 transition-opacity"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-end items-center mb-8">
                  <button onClick={closeMenu} className="p-1">
                    <X size={20} />
                  </button>
                </div>

                <nav className="space-y-6">
                  <Link
                    href="/"
                    className="block text-sm hover:opacity-60 transition-opacity duration-200"
                    onClick={closeMenu}
                  >
                    HOME
                  </Link>

                  <a
                    href="https://vimeo.com/showcase/burrowsfargion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:opacity-60 transition-opacity duration-200"
                    onClick={closeMenu}
                  >
                    VIMEO
                  </a>

                  <Link
                    href="/dates"
                    className="block text-sm hover:opacity-60 transition-opacity duration-200"
                    onClick={closeMenu}
                  >
                    DATES
                  </Link>

                  <Link
                    href="/publications"
                    className="block text-sm hover:opacity-60 transition-opacity duration-200"
                    onClick={closeMenu}
                  >
                    PUBLICATIONS
                  </Link>

                  <div>
                    <button
                      onClick={() => setScoresOpen(!scoresOpen)}
                      className="flex items-center justify-between w-full text-sm hover:opacity-60 transition-opacity duration-200"
                    >
                      SCORES
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${scoresOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {scoresOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-3 ml-4 space-y-3 overflow-hidden"
                        >
                          {scores.map((score) => (
                            <Link
                              key={score.id}
                              href={`/scores/${score.id}`}
                              className="block text-xs text-gray-600 hover:text-gray-900 transition-colors"
                              onClick={closeMenu}
                            >
                              {score.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <button
                      onClick={() => setInterviewsOpen(!interviewsOpen)}
                      className="flex items-center justify-between w-full text-sm hover:opacity-60 transition-opacity duration-200"
                    >
                      INTERVIEWS
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${interviewsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {interviewsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-3 ml-4 space-y-3 overflow-hidden"
                        >
                          {interviews.map((interview) => (
                            <Link
                              key={interview.id}
                              href={`/interviews/${interview.id}`}
                              className="block text-xs text-gray-600 hover:text-gray-900 transition-colors"
                              onClick={closeMenu}
                            >
                              {interview.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/contact"
                    className="block text-sm hover:opacity-60 transition-opacity duration-200"
                    onClick={closeMenu}
                  >
                    CONTACT
                  </Link>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
