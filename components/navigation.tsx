"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import MobileNavigation from "./mobile-navigation"
import { getAllScores } from "@/data/scores"
import { getAllInterviews } from "@/data/interviews"

export default function Navigation() {
  const scores = getAllScores()
  const interviews = getAllInterviews()

  return (
    <nav className="flex justify-between items-center py-4 md:py-6 px-4">
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm mx-auto">
        <Link href="/" className="hover:opacity-60 transition-opacity duration-200">
          HOME
        </Link>
        <a
          href="https://vimeo.com/showcase/burrowsfargion"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-60 transition-opacity duration-200"
        >
          VIMEO
        </a>
        <Link href="/dates" className="hover:opacity-60 transition-opacity duration-200">
          DATES
        </Link>
        <Link href="/publications" className="hover:opacity-60 transition-opacity duration-200">
          PUBLICATIONS
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center hover:opacity-60 transition-opacity duration-200">
            SCORES
            <ChevronDown className="ml-1 h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            {scores.map((score) => (
              <DropdownMenuItem key={score.id} asChild>
                <Link href={`/scores/${score.id}`} className="w-full">
                  {score.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center hover:opacity-60 transition-opacity duration-200">
            INTERVIEWS
            <ChevronDown className="ml-1 h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            {interviews.map((interview) => (
              <DropdownMenuItem key={interview.id} asChild>
                <Link href={`/interviews/${interview.id}`} className="w-full">
                  {interview.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/contact" className="hover:opacity-60 transition-opacity duration-200">
          CONTACT
        </Link>
      </div>

      <div className="md:hidden ml-auto">
        <MobileNavigation />
      </div>
    </nav>
  )
}
