import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'pulling-rank',
    title: 'Pulling Rank',
    description:
      'A full-stack military rank discussion and comparison forum built with React, Node.js, Express, and MongoDB.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
    ],
    githubUrl:
      'https://github.com/Luis-G-Santiago/project-4-military-rank-forum',
    liveUrl: '',
    featured: true,
  },
  {
    id: 'docket',
    title: 'Docket',
    description:
      'A task management application inspired by tools such as Trello, built with React and Vite.',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'CSS',
    ],
    githubUrl:
      'https://github.com/Luis-G-Santiago/project-3-task-manager',
    liveUrl:
      'https://luis-g-santiago.github.io/project-3-task-manager/',
    featured: true,
  },
  {
    id: 'one-piece-giphy-search',
    title: 'One Piece Giphy Search',
    description:
      'A search application that uses the Giphy API to find and display One Piece GIFs.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Giphy API',
    ],
    githubUrl:
      'https://github.com/Luis-G-Santiago/one-piece-giphy-search',
    liveUrl:
      'https://luis-g-santiago.github.io/one-piece-giphy-search/',
    featured: false,
  },
  {
    id: 'kung-fu-san-soo',
    title: 'Kung Fu San Soo Website',
    description:
      'A personal and business website created for Kung Fu San Soo.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    githubUrl:
      'https://github.com/Luis-G-Santiago/kung-fu-san-soo-website',
    liveUrl:
      'https://luis-g-santiago.github.io/kung-fu-san-soo-website/index.html',
    featured: false,
  },
]