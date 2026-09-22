function Contact() {
  return (
    <main className="min-h-[calc(100vh-145px)] bg-[#0b1120] px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl">
        <article className="space-y-20">
          {/* Hero */}
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Contact
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Let's Connect
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
              Interested in discussing a software engineering opportunity, a
              project, or simply connecting? I'd be glad to hear from you.
            </p>
          </section>

          {/* Contact Options */}
          <section>
            <h2 className="text-2xl font-semibold text-white">
              Find Me Online
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {/* GitHub */}
              <a
                href="https://github.com/Luis-G-Santiago"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 bg-slate-800 p-6 transition hover:border-slate-500"
              >
                <h3 className="text-lg font-semibold text-white">GitHub</h3>

                <p className="mt-2 leading-7 text-slate-300">
                  Explore my projects, source code, and ongoing development
                  work.
                </p>

                <span className="mt-4 inline-block text-sm font-semibold text-slate-400">
                  View GitHub →
                </span>
              </a>

              {/* Email */}
              <div className="rounded-xl border border-slate-700 bg-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white">Email</h3>

                <p className="mt-2 leading-7 text-slate-300">
                  The best way to reach me regarding software engineering
                  opportunities or professional inquiries.
                </p>

                <a
                  href="mailto:lgabriels247@gmail.com"
                  className="mt-4 inline-block font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  lgabriels247@gmail.com
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Contact;
