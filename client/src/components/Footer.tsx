function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-400">
            © 2026 Luis Santiago. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/Luis-G-Santiago"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="mailto:your-email@example.com"
              className="text-sm text-slate-400 transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer