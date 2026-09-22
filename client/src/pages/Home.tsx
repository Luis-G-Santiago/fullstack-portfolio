import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-[calc(100vh-145px)] bg-[#0b1120] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <section className="flex min-h-[60vh] items-center">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Full Stack Developer
            </p>

            {/* Heading */}
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Luis Santiago
            </h1>

            {/* Supporting Statement */}
            <p className="mt-6 text-xl leading-8 text-slate-300 sm:text-2xl">
              Building modern web applications with TypeScript, React, Node.js,
              Express, and MongoDB.
            </p>

            {/* Personal Statement */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I enjoy turning ideas into applications that are useful,
              functional, and thoughtfully built.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                View My Work →
              </Link>

              <a
                href="https://github.com/Luis-G-Santiago"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition hover:border-slate-500"
              >
                GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="border-t border-slate-800 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              What I Do
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Building Across the Stack
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              I build full-stack applications by working across the frontend,
              backend, and database layers.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Frontend */}
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <h3 className="text-xl font-semibold text-white">Frontend</h3>

              <p className="mt-2 font-medium text-slate-300">
                React + TypeScript
              </p>

              <p className="mt-4 leading-7 text-blue-400">
                Building responsive interfaces with component-based architecture
                and modern frontend tooling.
              </p>
            </div>

            {/* Backend */}
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <h3 className="text-xl font-semibold text-white">Backend</h3>

              <p className="mt-2 font-medium text-slate-300">
                Node.js + Express
              </p>

              <p className="mt-4 leading-7 text-blue-400">
                Building REST APIs, application logic, authentication, and
                backend services.
              </p>
            </div>

            {/* Full Stack */}
            <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
              <h3 className="text-xl font-semibold text-white">Full Stack</h3>

              <p className="mt-2 font-medium text-slate-300">MERN</p>

              <p className="mt-4 leading-7 text-blue-400">
                Connecting the frontend, backend, and database into complete
                applications.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-t border-slate-800 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Let's Build Something
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have an opportunity or an idea?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              I'm always interested in discussing software engineering
              opportunities, projects, and ideas.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Get In Touch →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
