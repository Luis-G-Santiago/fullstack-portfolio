import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-700 bg-slate-800 p-6">
      <div className="flex-1">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 className="text-2xl font-semibold text-white">
            {project.title}
          </h2>

          {project.featured && (
            <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
              Featured
            </span>
          )}
        </div>

        <p className="leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-slate-700 px-3 py-1 text-sm text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-white transition hover:text-slate-300"
        >
          GitHub →
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white transition hover:text-slate-300"
          >
            Live Site →
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard