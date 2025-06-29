"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight } from "lucide-react"
import Navigation from "@/components/navigation"
import PageHeader from "@/components/page-header"
import PageTransition from "@/components/page-transition"
import { imageFiles } from "@/data/images"

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Shuffle images randomly on the client only to avoid hydration mismatch
  const [shuffledImages, setShuffledImages] = useState(imageFiles)
  useEffect(() => {
    const shuffle = (array: any[]) => {
      let currentIndex = array.length, randomIndex;
      const arr = [...array]
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
      }
      return arr;
    }
    setShuffledImages(shuffle(imageFiles))
  }, [])

  // Use shuffledImages for the carousel
  const images = shuffledImages

  // Show nothing or a loader until images are shuffled (prevents hydration mismatch)
  if (!images || images.length === 0) return null;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }, 10000)

    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    // Preload the next image in the carousel
    const nextIndex = (currentImageIndex + 1) % images.length;
    const img = new window.Image();
    img.src = images[nextIndex].src;
  }, [currentImageIndex, images]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <PageTransition>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="space-y-8 sm:space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Static Header - No Animation */}
            <PageHeader className="font-medium text-black" />

            <div className="space-y-8 sm:space-y-12">
              {/* Image Carousel */}
              <motion.div
                className="w-full max-w-3xl mx-auto relative h-64 sm:h-80 lg:h-96 overflow-hidden  group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-contain bg-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}


                {/* Credit Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-transparent bg-opacity-40 flex items-end justify-between p-4"
                    >
                      <div className="text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                        {images[currentImageIndex].credit}
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Bio */}
              <motion.div
                className="space-y-4 sm:space-y-6 text-gray-700 text-center sm:text-left max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-sm sm:text-base leading-relaxed">
                  Choreographer Jonathan Burrows and composer Matteo Fargion have been collaborators for thirty years, slowly building a body of work which straddles the line between dance, music, performance art and comedy. The work has drawn an international following for its integrity, openness and independent stance, situating itself at the forefront of dance practice, but resisting the currency and hierarchies of the marketplace. A sense of a conversation with audience is central to their performance practice, equal together under the same roof.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  Both artists studied classical music composition with composer Kevin Volans, which knowledge and experience informs their frequent use of written score, as a way to work with duration and as a distancing mechanism from more conventional notions of performance. They describe all their work as music, and are often engaged in acts of translation where what was heard is now seen, or what was seen becomes spoken language.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  Their new performance The Unison Piece, opened at choreographer Mette Edvardsen's Norma T bookshop in Oslo on 10th May 2025. The Unison Piece is an investigation, critique and celebration of doing things together in time, performed at a table with two electric guitars.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  The performance practice of the two artists extends also to collaborative workshops with other artists, students, writers and curators from dance and related mediums, which both share the processes and methodologies of the work and act as a staging ground for current questions around performance. Burrows also wrote the widely used A Choreographer's Handbook, which has sold over 19,000 copies since its publication by Routledge in 2010, and is now available in a new and extended 2nd edition (2024). He is also the author of Writing Dance (Varamo Press, 2022).
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  They perform regularly around the world, presenting different works in different combinations, frequently for non-theatre spaces. Their philosophy is that all work is new at the point of performance, and they often don't announce new pieces in favour of guerrilla performances which bury the new into the body of work.
                </p>

                <p className="text-sm sm:text-base leading-relaxed">
                  Burrows is currently an Associate Professor at the Centre for Dance Research (C-DaRE), Coventry University.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </PageTransition>
    </div>
  )
}
