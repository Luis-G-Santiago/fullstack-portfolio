import { projects } from '../data/projects'

function PullingRankCaseStudy() {
  const project = projects[0]

  return (
    <article className="space-y-20">
      {/* Hero */}
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          Featured Full-Stack Project
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Pulling Rank
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
          A full-stack military rank discussion and comparison forum
          built with React, Node.js, Express, MongoDB, and JWT
          authentication.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Luis-G-Santiago/project-4-military-rank-forum"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold text-white">
          What It Does
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Pulling Rank is a web application for exploring and comparing
          military rank information. The application combines a React
          frontend with a Node.js and Express API backed by MongoDB.
        </p>
      </section>

      {/* Technology Stack */}
      <section>
        <h2 className="text-2xl font-semibold text-white">
          Technology Stack
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section>
        <h2 className="text-2xl font-semibold text-white">
          Architecture
        </h2>
        
        <p className="mt-5 max-w-3xl text-slate-300">
          The frontend communicates with the Express API through
          REST endpoints, while Mongoose handles communication between
          the backend and MongoDB Atlas.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 text-center sm:flex-row">
          <div className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-4">
            <p className="font-semibold text-white">React</p>
            <p className="mt-1 text-sm text-slate-400">
              Frontend
            </p>
          </div>

          <span className="text-slate-500 sm:text-xl">
            →
          </span>

          <div className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-4">
            <p className="font-semibold text-white">
              Node + Express
            </p>
            <p className="mt-1 text-sm text-slate-400">
              REST API
            </p>
          </div>

          <span className="text-slate-500 sm:text-xl">
            →
          </span>

          <div className="rounded-lg border border-slate-700 bg-slate-800 px-6 py-4">
            <p className="font-semibold text-white">
              MongoDB Atlas
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Database
            </p>
          </div>
        </div>

      </section>

      {/* Authentication */}
      <section>
        <h2 className="text-2xl font-semibold text-white">
          Authentication
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          JWT-based authentication protects authenticated functionality.
          After a successful login, the backend issues a token that the
          frontend uses when making authenticated requests.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300">
          <span className="rounded-md bg-slate-800 px-4 py-2">
            Login
          </span>

          <span className="text-slate-500">→</span>

          <span className="rounded-md bg-slate-800 px-4 py-2">
            JWT
          </span>

          <span className="text-slate-500">→</span>

          <span className="rounded-md bg-slate-800 px-4 py-2">
            Authenticated Request
          </span>

          <span className="text-slate-500">→</span>

          <span className="rounded-md bg-slate-800 px-4 py-2">
            Protected API
          </span>
        </div>
      </section>

      {/* Challenges & Problem Solving */}
      <section>
        <h2 className="text-2xl font-semibold text-white">
          Challenges & Problem Solving
        </h2>

        <div className="mt-5 max-w-3xl">
          <h3 className="text-lg font-semibold text-white">
            Frontend-to-Backend Communication
          </h3>

          <p className="mt-3 leading-8 text-slate-300">
            During development, the frontend encountered CORS and API
            connectivity issues when communicating with the Express
            backend. I traced requests between the Vite development
            server and API, adjusted the CORS configuration and
            development proxy setup, and verified the endpoints with
            curl and Postman.
          </p>
        </div>
      </section>

      {/* What I Built */}
      <section>
        <h2 className="text-2xl font-semibold text-white">
          What I Built
        </h2>

        <div className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-white">
              Frontend
            </h3>

            <p className="mt-2 leading-7 text-slate-300">
              Built the React interface and connected it to the backend
              API for interacting with application data.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Backend
            </h3>

            <p className="mt-2 leading-7 text-slate-300">
              Built the Node.js and Express REST API and implemented
              the application's backend logic.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Database
            </h3>

            <p className="mt-2 leading-7 text-slate-300">
              Integrated MongoDB Atlas with Mongoose for storing and
              accessing rank data.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Authentication
            </h3>

            <p className="mt-2 leading-7 text-slate-300">
              Implemented JWT authentication and connected authenticated
              frontend requests to protected API routes.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default PullingRankCaseStudy