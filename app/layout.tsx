import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Habit Streak API Monitor',
  description: 'Monitor habit tracking app APIs for downtime. Get alerted when Strava, MyFitnessPal, and other APIs go down before your users lose their streaks.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1b64793b-9da5-432f-9faa-115dd5eb428d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
