"use client"

interface PageHeaderProps {
  className?: string
  header?: string
}

export default function PageHeader({ className = "", header }: PageHeaderProps) {
  return (
    <h1 className={`text-xl sm:text-2xl font-thin mb-6 sm:mb-8 text-center sm:text-left ${className}`}>
      {header || "Burrows&Fargion"}
    </h1>
  )
}
