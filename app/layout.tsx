import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CV Match AI - Perfect CV Matching for Job Seekers',
  description: 'Know if a job is worth applying to, before you apply. Upload your CV and a job post to see how well they match, and get clear suggestions to boost your chances.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}