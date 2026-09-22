function Blog() {
  return (
    <main className="min-h-[calc(100vh-145px)] bg-[#0b1120] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <article className="space-y-20">
          {/* Hero */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Blog
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Engineering Notes
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              Notes on what I'm learning, building, and solving as I continue
              developing as a full-stack engineer.
            </p>
          </section>

          {/* Current Focus */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Currently Learning
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              I'm currently focused on strengthening my TypeScript skills while
              continuing to build with React, Node.js, Express, and MongoDB.
            </p>
          </section>

          {/* Engineering Notes */}
          <section>
            <h2 className="text-2xl font-semibold text-white">Recent Notes</h2>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {/* TypeScript */}
              <article className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  TypeScript
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  Learning TypeScript
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  Lessons I'm learning while strengthening TypeScript and
                  applying it to modern full-stack development.
                </p>
              </article>

              {/* Pulling Rank */}
              <article className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Project
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  Building Pulling Rank
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  What I learned while connecting React, Express, MongoDB,
                  authentication, and the pieces of a full-stack application.
                </p>
              </article>

              {/* Career */}
              <article className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                  Career
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  From IT to Software Engineering
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  How my experience working with technology in IT has shaped the
                  way I approach software development.
                </p>
              </article>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Blog;
