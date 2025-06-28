"use client"

import Navigation from "@/components/navigation"
import PageHeader from "@/components/page-header"
import PageTransition from "@/components/page-transition"
import { motion } from "framer-motion"

export default function DatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4">
        <PageHeader />

        <div className="max-w-4xl mx-auto">
          <PageTransition>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 border-b border-gray-300 pb-2">
                  Performances and Teaching
                </h2>
              </div>

              {/* 2026 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.025 }}
              >
                <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 border-b border-gray-300 pb-1">2026</h3>
                <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">12th-16th January</p>
                    <p>JB Workshop at SEAD, Salzburg, Austria</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">5th-9th January</p>
                    <p>JB Masters workshop La Cambre Brussels, Belgium</p>
                  </div>
                </div>
              </motion.div>

              {/* 2025 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 border-b border-gray-300 pb-1">2025</h3>
                <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">20th November</p>
                    <p>B&F with Quatuor Bozzini, Any Table Any Room, Rainy Days 25 Festival, Luxembourg</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">27th, 28th October</p>
                    <p>JB Masters workshop at Trinity Laban, London, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">13th-17th October</p>
                    <p>JB Workshop The felt sense of making, for MAD Board Mixed Abled Dance & Performance, Tanzquartier, Vienna</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">27th September</p>
                    <p>JB Scan Tester Fan Club, traditional English folk music performance, East Anglian Traditional Music Day, Stowmarket, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">1st-8th August</p>
                    <p>JB Scan Tester Fan Club, traditional English folk music performance, Sidmouth Folk Festival, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">29th July</p>
                    <p>JB talk with philosopher Alva Noë, European Summer Research Institute, Rangjung Yeshe Gomde, Scharnstein, Austria</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">26th, 27th July</p>
                    <p>JB Workshop Questioning Choreography, Impulstanz, Vienna, Austria</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">7th-18th July</p>
                    <p>JB Co-director with Mel Mercier, Judith Ring and Liz Roche of international choreographer's and composer's course Moving In Collaboration, Luail Ireland's National Dance Company, Limerick, Ireland</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">22nd June</p>
                    <p>B&F The Unison Piece, at interdisciplinary conference Composition Interference Transposition, HMDK Stuttgart, Germany</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">19th, 20th and 23rd, 24th June</p>
                    <p>B&F Workshop at interdisciplinary conference Composition Interference Transposition, HMDK Stuttgart, Germany</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">2nd June</p>
                    <p>JB Scan Tester Fan Club, traditional English folk music performance, Tonbridge Folk Club, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">29th May</p>
                    <p>JB with Bojana Cvejić, Keynote speech Relational attention in choreography and the felt sense of sequenced behaviour, at the international conference Cadences, Attentional Moves in the Arts and Everyday Life, Lisbon, Portugal</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">26th, 27th May</p>
                    <p>JB Workshop with Bojana Cvejić, at the international conference Cadences, Attentional Moves in the Arts and Everyday Life, Lisbon, Portugal</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">18th May</p>
                    <p>JB Workshop at Dance Week Festival, Zagreb, Croatia</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">17th May</p>
                    <p>B&F Rewriting and The Unison Piece, Dance Week Festival, Zagreb, Croatia</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">13th-16th May</p>
                    <p>Premiere of The Ballad of Bøler Samvirkelag, with the Bøler Samvirkelag women's collective, Dansenshus, Oslo, Norway</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">10th May</p>
                    <p>B&F Premiere of new duet The Unison Piece at Norma T, Oslo, Norway</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">6th May</p>
                    <p>JB Rethinking Choreography, public talk at Høyskolen for Dansekunst, Oslo, Norway</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">29th April</p>
                    <p>JB Online booklaunch talk A Choreographer's Handbook Croatian translation, Acadamy of Dramatic Art Zagreb, Croatia</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">11th, 12th March</p>
                    <p>JB Scan Tester Fan Club, traditional English folk music performance, Oxford Folk Festival, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">3rd-7th and 24th-28th March</p>
                    <p>JB Workshop at BorGO Live Academy, Gorizia, Italy</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">1st March</p>
                    <p>JB Scan Tester Fan Club traditional English folk music performance, Lewes Folk Club, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">3rd-7th February</p>
                    <p>JB Masters workshop at Home Of Performance Practices, ArtEZ, Arnhem, Netherlands</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">25th, 26th January</p>
                    <p>JB Workshop at VAHELÜLI 2025, Tallinn, Estonia</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">14th-23rd January</p>
                    <p>JB Workshop at SEAD, Salzburg, Austria</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">12th January</p>
                    <p>JB Scan Tester Fan Club, traditional English folk music performance, Islington Folk Club, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">12th January</p>
                    <p>JB Scan Tester Fan Club, traditional English folk music performance, Horsham Folk Club, UK</p>
                  </div>
                </div>
              </motion.div>

              {/* 2024 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 border-b border-gray-300 pb-1">2024</h3>

                <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">2nd-6th December</p>
                    <p>JB Masterclass at Atelier de Paris, France</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">29th, 30th November</p>
                    <p>JB Workshop at U(R)TOPIAS Academy of Choreography, Eleusis, Greece</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">22nd November</p>
                    <p>JB Scan Tester Fan Club, traditional English folk music performance, The Swan Falmer, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">21st, 22nd November</p>
                    <p>JB Masters workshop at Trinity Laban, London, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">14th-18th October</p>
                    <p>JB Masters workshop La Cambre Brussels, Belgium</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">29th September</p>
                    <p>B&F Both Sitting Duet and Rewriting,  OBRT NET Festival Šibenik, Croatia</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">28th, 29th September</p>
                    <p>JB Workshop at OBRT NET Festival Šibenik, Croatia</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">23rd September</p>
                    <p>JB Scan Tester Fan Club, traditional English folk music performance, Croydon Folk Club, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">18th September</p>
                    <p>B&F Keynote speech and performance of Speaking Dance, Graduate School opening conference Trinity Laban, London, UK</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">24th, 25th July</p>
                    <p>JB Seminar for Hollins University Dance MFA programme, Plovdiv, Bulgaria</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">11th April</p>
                    <p>JB My Dance History, public talk Lisbon Public Library, Lisbon, Portugal</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">13th–25th May</p>
                    <p>JB Mentoring project BRÜCKEREI #2, for Tanzhaus Zurich and HF ZUB, Zurich, Switzerland</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">8th–13th April</p>
                    <p>JB Workshop Forum Dança, Lisbon, Portugal</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">12th–16th February</p>
                    <p>MF Workshop at Icelandic University of the Arts Masters Programme, Reykjavik, Iceland</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">5th–16th February</p>
                    <p>JB Workshop at SEAD, Salzburg, Austria</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">9th January</p>
                    <p>JB Rethinking Choreography, public talk Playground Studio Munich, Germany</p>
                  </div>
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">8th January–2nd February</p>
                    <p>MF Composition workshop and new piece, SEAD, Salzburg, Austria</p>
                  </div>
                </div>
              </motion.div>

              {/* 2023 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 border-b border-gray-300 pb-1">2023</h3>

                <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">18th–21st December</p>
                    <p>JB Workshop at Iuav University, Venice, Italy</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">November 15th</p>
                    <p>JB This Then That, lecture as part of MA/MFA Computational Arts Hacking Your Creative Practice module, Goldsmiths University of London, UK
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">13th–17th November</p>
                    <p>MF Workshop at P.A.R.T.S, Brussels, Belgium</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">25th–26th October</p>
                    <p>MF Durante and the Bad Loves (with Spreafico Eckly), Meteor Festival, Bergen, Norway</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">23rd, 24th, 26th, 27th October</p>
                    <p>JB Workshop at Trinity Laban, London, England</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">13th, 14th October</p>
                    <p>
                      MF Premiere of Durante and the Bad Loves (with Spreafico Eckly), Rosendal Theater, Trondheim,
                      Norway
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">28th–30th September</p>
                    <p>JB Workshop at Lithuanian Academy of Music and Theatre, Vilnius, Lithuania</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">25th–30th September</p>
                    <p>MF Workshop at Anghiari Dance Hub, Anghiari, Italy</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">18th–29th September</p>
                    <p>JB Workshop at P.A.R.T.S, with Seke Chimutengwende and Julia Cheng, Brussels, Belgium</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">11th–18th September</p>
                    <p>MF Workshop at Iceland Academy of the Arts, Reykjavik, Iceland</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">17th–23rd July</p>
                    <p>MF Workshop at Impulstanz, Vienna, Austria</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">17th–19th July</p>
                    <p>JB Workshop for Hollins University Dance MFA programme, Plovdiv, Bulgaria</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">15th–16th July</p>
                    <p>
                      JB Workshop with Bojana Cvejić, Choreography as a manifestation of how the brain already works,
                      Impulstanz, Vienna, Austria
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">10th–14th July</p>
                    <p>JB Workshop Writing Dance, Impulstanz, Vienna, Austria</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">12th June</p>
                    <p>JB Writing Dance, online podcast reading for Parasita Association, Lisbon, Portugal</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">29th April</p>
                    <p>JB Booklaunch talk Writing Dance, P.A.R.T.S. Brussels, Belgium</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">8th–12th May</p>
                    <p>B&F Workshop 'Writing Towards A Subject' at Tanzquartier, Vienna, Austria</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">5th April</p>
                    <p>
                      B&F She Dancing with Katye Coe and Francesca Fargion as part of Good Company, AMP Studios Peckham,
                      London, England
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">22nd–23rd March</p>
                    <p>MF Bad Dante Bad English Bad Opera (with Spreafico Eckly), Trienniale, Milano, Italy</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">14th, 15th, 17th March</p>
                    <p>JB Online workshop for Macau Dance Lab Project, Macau, China</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">28th February–10th May</p>
                    <p>MF Workshop at SEAD, Salzburg, Austria</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">13th–17th February</p>
                    <p>JB Masterclass at Atelier de Paris, France</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">7th February</p>
                    <p>MF The Solo Piece, Birmingham Conservatoire, Birmingham, England</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">7th–8th February</p>
                    <p>MF Workshop at Birmingham Conservatoire, Birmingham, England</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">3rd–4th February</p>
                    <p>B&F Both Sitting Duet/Rewriting, Kampnagel, Hamburg, Germany</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">31st January–2nd February</p>
                    <p>B&F Workshop at Material Goods symposium, Hamburg, Germany</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">30th January–2nd February</p>
                    <p>
                      B&F Workshop as part of <em>Material Goods</em> international academic conference, Kampnagel,
                      Hamburg, Germany
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">17th–24th January</p>
                    <p>MF Workshop at SEAD, Salzburg, Austria</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">16th–28th January</p>
                    <p>
                      JB Breaking Convention <em>Back To The Lab</em> mentoring project with Jonzi D, Sadler's Wells,
                      London, England
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">9th–13th January</p>
                    <p>JB Workshop at SEAD, Salzburg, Austria</p>
                  </div>
                </div>
              </motion.div>

              {/* 2022 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 border-b border-gray-300 pb-1">2022</h3>

                <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">29th November–2nd December</p>
                    <p>MF Workshop with Masters students (with Andrea Spreafico), IUAV University, Venice, Italy</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">21st–25th November</p>
                    <p>JB Workshop at P.A.R.T.S Brussels co-curated with Adrian Heathfield, Brussels, Belgium</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">17th–18th November</p>
                    <p>B&F Speaking Dance/Rewriting, Friche la belle de Mai, Marseille, France</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">22nd October</p>
                    <p>MF The Solo Piece at Teatro Anghiari, Italy</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">18th–22nd October</p>
                    <p>MF Workshop at Anghiari Dance Hub, Anghiari, Italy</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">24th–25th September</p>
                    <p>MF Bad Dante Bad English Bad Opera (with Spreafico Eckly), Ultima Festival, Oslo, Norway</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">21st September</p>
                    <p>MF We have to dress gorgeously (with Spreafico Eckly), Teatro Rasi, Ravenna, Italy</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">16th–17th September</p>
                    <p>
                      B&F Both Sitting Duet/Rewriting, Echelon Humane, Lafayette Anticipations, Festival D'Automne,
                      Paris, France
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">6th August</p>
                    <p>B&F Rewriting/Science Fiction, Tanzwerkstatt Europa, Munich, Germany</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">7th–10th July</p>
                    <p>B&F Hausen, a 4 day performance installation, Musikinstallationen Festival, Nuremberg</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">20th–25th June</p>
                    <p>B&F Creation of This Then That, final year students at MDT, Amsterdam, Holland</p>
                  </div>


                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">18th June</p>
                    <p>JB How A Roundabout Works, performance with Bojana Cvejić, Kaitheater Brussels, Belgium</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">7th–8th June</p>
                    <p>MF Bad Dante Bad English Bad Opera (with Spreafico Eckly), Festspiele, Bergen, Norway</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">25th May (tbc)</p>
                    <p>JB Public talk, Modes of Capture, Jenny and Liz Roche, Dublin, Ireland</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">9th–23rd May</p>
                    <p>B&F Teaching at CNDC, Angers, France</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">5th–6th May</p>
                    <p>B&F Rewriting/Science Fiction, Lilian Baylis Theatre, London, England</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">19th–22nd April</p>
                    <p>MF Flowers (We Are) with Claire Croizé (ECCE), Theatre de la Bastille, Paris, France</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">2nd–3rd April</p>
                    <p>B&F Both Sitting Duet, Palazzo Grassi, Venice, Italy</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">9th March</p>
                    <p>B&F Both Sitting Duet/Science Fiction, CNDC, Angers, France</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">21st–23rd February</p>
                    <p>JB Rethinking Choreography with Bojana Cvejić, Tanzquartier Vienna, Austria</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">14th–18th February</p>
                    <p>JB Teaching at Kask, Ghent, Belgium</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">27th January</p>
                    <p>JB Public talk with Bojana Cvejić and Guido Orgs, Almost Feeling It, Oslo, Norway</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">19th–21st January</p>
                    <p>JB Back To The Lab, Sadler's Wells Theatre, London</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">15th–17th January</p>
                    <p>JB Inventing Embodiment workshop, Tanzfabrik, Berlin</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">10th–28th January</p>
                    <p>B&F Workshop at SEAD, Salzburg, Austria</p>
                  </div>
                </div>
              </motion.div>

              {/* 2021 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 border-b border-gray-300 pb-1">2021</h3>

                <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">3rd December</p>
                    <p>B&F Rewriting/Science Fiction, IMIR/RIMI, Stavanger, Norway</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">2nd December</p>
                    <p>MF Penelope Sleeps (with Mette Edvardsen), RIMI, Stavanger, Norway</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">27th November</p>
                    <p>B&F Both Sitting Duet/Rewriting, COFestival, Ljubljana, Slovenia</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">19th–21st November</p>
                    <p>B&F 52 Portraits (with Hugo Glendinning), Dance House, Melbourne, Australia</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">17th November</p>
                    <p>B&F Rewriting/Science Fiction, St John's Church, Limerick, Ireland</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">16th–17th November</p>
                    <p>B&F Workshop at Limerick Dance, Ireland</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">1st–5th November</p>
                    <p>MF Workshop at Icelandic University of the Arts Masters Programme, Reykjavik, Iceland</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">20th–24th October</p>
                    <p>MF Workshop at Anghiari Dance Hub, Anghiari, Italy</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">9th October</p>
                    <p>
                      B&F Music For Lectures: Get Lost with Wendy Houstoun, Wainsgate Chapel, Hebden Bridge, England
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">6th–9th October</p>
                    <p>B&F The 3 Day Solo, Workshop at Wainsgate Dances, Hebden Bridge, England</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">27th October–1st November</p>
                    <p>MF Workshop at Institut de Teatre, Barcelona, Spain</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">18th–19th September</p>
                    <p>
                      MF Premiere of Bad Dante Bad English Bad Opera (with Spreafico Eckly), Rosendal Theatre,
                      Trondheim, Norway
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">4th September</p>
                    <p>MF Premiere of The Nobby Saddy Quartet (String Quartet no 5), London</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">9th–13th August</p>
                    <p>B&F Doing Things with Music, Impulstanz, Vienna, Austria</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">30th July</p>
                    <p>MF Premiere of En Route with Luca Silvestrini (Protein), Woolwich, London</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">3rd July</p>
                    <p>MF The Solo Piece, Universal Hall, Findhorn, Scotland</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">25th June</p>
                    <p>JB Podcast interview, Siobhan Murphy, Melbourne</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">10th–21st May</p>
                    <p>JB Workshop with Alesandra Seutin at Écoles des Sables, Dakar, Senegal</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">7th May</p>
                    <p>B&F Science Fiction, Hessische Theaterakademie, Frankfurt (cancelled)</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">19th–24th April</p>
                    <p>JB Back To The Lab, Sadler's Wells, London</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">10th April</p>
                    <p>B&F Cheap Lecture/The Cow Piece, INMM, Darmstadt (cancelled)</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">31st March</p>
                    <p>JB Almost Feeling It, talk with Rachel Krische, Leeds Beckett University</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">30th March</p>
                    <p>JB The Gaps Between, online talk, Kingston University</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">22nd February–5th March</p>
                    <p>JB Imagine Home, British Council online mentoring, Venezuela</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">15th–19th February</p>
                    <p>JB Online workshop, Oslo National Academy of the Arts</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">6th–19th February</p>
                    <p>JB Online teaching, Kask, Ghent</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">25th January–13th February</p>
                    <p>B&F Online workshop, SEAD, Salzburg</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">25th–29th January</p>
                    <p>JB Workshop with Bojana Cvejić, P.A.R.T.S, Brussels</p>
                  </div>

                  <div>
                    <p className="mb-1 sm:mb-2 font-medium">18th–22nd January</p>
                    <p>JB Back To The Lab, Sadler's Wells, London</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </PageTransition>
        </div>
      </div>
    </div>
  )
}
