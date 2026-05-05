import { Project } from '../interfaces/project.interface';

export const projectList: Project[] = [
  {
    title: 'PROJECTS.PHYSIONOW.TITLE',
    shortDescription: [
      'PROJECTS.PHYSIONOW.DESCRIPTION_PARAGRAPH_1__TEXT',
      'PROJECTS.PHYSIONOW.DESCRIPTION_PARAGRAPH_2__TEXT',
      'PROJECTS.PHYSIONOW.DESCRIPTION_PARAGRAPH_3__TEXT',
    ],
    imageUrl: 'images/physionow-preview.png',
    url: 'physionow',
    stack: [
      {
        label: 'Angular',
        value: 'angular',
      },
      {
        label: 'TypeScript',
        value: 'typescript',
      },
      {
        label: 'HonoJs',
        value: 'honojs',
      },
      {
        label: 'Cloudflare Workers',
        value: 'cloudflare-workers',
      },
      {
        label: 'AWS',
        value: 'aws',
      },
      {
        label: 'D1 Database (SQLite)',
        value: 'd1-sqlite',
      },
    ],
  },
  {
    title: 'PROJECTS.MULTITENANT_IDEATOR.TITLE',
    shortDescription: [
      'PROJECTS.MULTITENANT_IDEATOR.DESCRIPTION_PARAGRAPH_1__TEXT',
      'PROJECTS.MULTITENANT_IDEATOR.DESCRIPTION_PARAGRAPH_2__TEXT',
      'PROJECTS.MULTITENANT_IDEATOR.DESCRIPTION_PARAGRAPH_3__TEXT',
      'PROJECTS.MULTITENANT_IDEATOR.DESCRIPTION_PARAGRAPH_4__TEXT',
    ],
    imageUrl: 'images/ideator-preview.png',
    url: 'multitenant-ideator',
    stack: [
      {
        label: 'Angular',
        value: 'angular',
      },
      {
        label: 'TypeScript',
        value: 'typescript',
      },
      {
        label: 'Spring Boot',
        value: 'spring-boot',
      },
      {
        label: 'Kotlin',
        value: 'kotlin',
      },
      {
        label: 'MySQL',
        value: 'mysql',
      },
    ],
  },
];
