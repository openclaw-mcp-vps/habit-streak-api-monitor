export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          API Monitoring for Habit Apps
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Letting API Downtime<br />Kill Your Users&apos; Streaks
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Continuously monitors Strava, MyFitnessPal, and other habit tracking APIs.
          Get instant webhook alerts before your users notice sync failures and lose streaks they&apos;ve built for months.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $9/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          {[
            ["99.9%", "Uptime Tracked"],
            ["< 60s", "Alert Latency"],
            ["10+", "APIs Monitored"],
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Monitor unlimited habit tracking APIs",
              "60-second polling intervals",
              "Webhook + email alerts",
              "Uptime history dashboard",
              "Strava, MyFitnessPal, Fitbit & more",
              "Cancel anytime",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which APIs do you monitor?",
              "We monitor Strava, MyFitnessPal, Fitbit, Apple Health relay endpoints, Garmin Connect, and more. You can also add custom API endpoints for your own backend.",
            ],
            [
              "How fast will I get alerted?",
              "Our cron checker runs every 60 seconds. The moment an API returns an error or times out, a webhook fires to your endpoint and an email is sent — typically within 90 seconds of the outage starting.",
            ],
            [
              "What if I want to cancel?",
              "No contracts, no hassle. Cancel anytime from your billing portal and you won't be charged again. Your monitoring stays active until the end of the billing period.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Habit Streak API Monitor. All rights reserved.
      </footer>
    </main>
  )
}
