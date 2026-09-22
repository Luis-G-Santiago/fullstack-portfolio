function About() {
  return (
    <main className="min-h-[calc(100vh-145px)] bg-[#0b1120] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <article className="space-y-20">
          {/* Hero */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              About Me
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Luis Santiago
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              Full Stack Developer with an IT operations background and a strong
              interest in building software that solves real problems.
            </p>
          </section>

          {/* Background */}
          <section>
            <h2 className="text-2xl font-semibold text-white">My Background</h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              I've always been interested in software engineering. Writing code
              and seeing what can be created from it is what first drew me
              toward development. My background in IT has given me a strong
              foundation in troubleshooting, problem solving, and working with
              technology in real-world environments.
            </p>
          </section>

          {/* Engineering Focus */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Engineering Focus
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              I enjoy building applications that can stand on their own and
              creatively solve a problem. My goal as a developer is to work
              across the full stack so I can understand and contribute to every
              part of an application, from the user interface to the backend and
              database.
            </p>
          </section>

          {/* Current Focus */}
          <section>
            <h2 className="text-2xl font-semibold text-white">Current Focus</h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              I am currently focused on strengthening my TypeScript skills
              alongside the technologies I use across the modern full stack.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}

export default About;
