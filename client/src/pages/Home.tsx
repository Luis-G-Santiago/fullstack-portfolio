import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="min-h-[calc(100vh-145px)] bg-slate-900 text-white">
      <section className="mx-auto flex min-h-[calc(100vh-145px)] max-w-6xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Full Stack Developer
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Luis Santiago
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I build modern, full-stack web applications using TypeScript,
            React, Node.js, Express, and MongoDB.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              View My Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-slate-400 hover:bg-slate-800"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home