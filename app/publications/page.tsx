"use client"

import Navigation from "@/components/navigation"
import PageTransition from "@/components/page-transition"
import { motion } from "framer-motion"
// import { imageFiles } from "@/data/images"

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-xl sm:text-2xl font-light mb-6 sm:mb-8 text-center sm:text-left">Burrows&Fargion</h1>



        <div className="max-w-4xl mx-auto">
          <PageTransition>



            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 italic">
                  Writing Dance (Varamo Press, 2022)
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  <motion.div
                    className="text-sm sm:text-base leading-relaxed order-2 lg:order-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                  >
                    <p className="mb-4">
                      Jonathan Burrows' new book <em>Writing Dance</em> (Varamo Press, 2022) is now available to buy. The book is a collection of thoughts, observations and questions about practice, drawn from talks and fragments of writing over the past 10 years.<br /><br />
                      You can order the book online for €10 plus postage from <a href="https://www.booksonthemove.fr/produit/writing-dance/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-black">Books On The Move</a>.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex justify-center lg:justify-end order-1 lg:order-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <img
                      src="/images/writing-dance.jpg"
                      alt="Writing Dance book cover"
                      className="w-32 h-32 sm:w-48 sm:h-48 object-cover shadow-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 italic">
                  A Choreographer's Handbook (Routledge, 2010, 2nd edition 2024)
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  <motion.div
                    className="text-sm sm:text-base leading-relaxed order-2 lg:order-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <p className="mb-4">
                    The 2nd edition of Burrows' A Choreographer's Handbook was published in 2024, updating and expanding the book with new ideas and perspectives on choreography. <br /><br />
                    The book is written as a series of questions and observations about choreography and performance, and is intended as a resource to help artists re-examine how they approach their own work and practice. It's designed to allow the reader to browse through and cross reference ideas in any order, and is accessible to artists from all performance disciplines including dance, theatre, music and visual arts. It has sold over 19,000 copies worldwide and been translated into German (Tanz Magazine, 2010), Slovenian (Maska, 2011), French (Contredanse, 2017), Bulgarian (Metheor, 2017), Chinese (Bookman Books, 2020), Korean (Workroom Press, 2022) and Croatian (Acadamy of Dramatic Art Zagreb, 2024).
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex justify-center lg:justify-end order-1 lg:order-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <img
                      src="/images/choreographer-handbook.jpg"
                      alt="A Choreographer's Handbook book cover"
                      className="w-32 h-32 sm:w-48 sm:h-48 object-cover shadow-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6">
                  Published articles by Jonathan Burrows
                </h2>

                <div className="text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4">
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <em>Conversation on Body and Performance Practices</em>, between dancer Linda Samaraweerova and choreographer Jonathan Burrows, TQW Paper, Tanzquartier Vienna, 2024
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                  >
                    <em>Creativity, skill, integrity, intelligence and community: A conversation on the nature of practice in hip hop</em>, Robert Hylton and Jonathan Burrows, Dance Research, edited by Sarah Whatley, Edinburgh University Press, 2024.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <em>Scribbling Towards Something: Interview on the Written in Dance</em>, for 'Materialities in Dance and Performance', edited by Gabriele Klein and Franz Anton Cramer, University of Hamburg, 2024.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.65 }}
                  >
                    <em>Thinking Together About the Ethics of Training</em>, article co-authored with Alesandra Seutin for the book Ethical Agility in Dance: Rethinking Technique in British Contemporary Dance, edited by Dr Noyale Colin and Dr Catherine Seago (University of Winchester), draft publication date Spring 2023
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <em>Thinking Together About the Ethics of Training: A conversation between Alesandra Seutin and Jonathan Burrows</em>, for 'Ethical Agility in Dance: Rethinking Technique in British Contemporary Dance', edited by Noyale Colin, Catherine Seago and Kathryn Stamp, Routledge, 2023.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </PageTransition>
        </div>
      </div>
    </div>
  )
}
