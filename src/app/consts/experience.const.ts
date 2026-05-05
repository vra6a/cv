import { Experience } from '../interfaces/experience.interface';

export const experienceList: Experience[] = [
  {
    workplace: 'WORK_EXPERIENCE.TELEKOM.TITLE',
    startDate: new Date(2022, 8, 1),
    duration: calculateDuration(new Date(2022, 8, 1)),
    stack: [
      {
        label: 'Angular',
        value: 'angular',
      },
      {
        label: 'RxJs',
        value: 'rxjs',
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
      {
        label: 'MongoDB',
        value: 'mongodb',
      },
      {
        label: 'RabbitMQ',
        value: 'rabbitmq',
      },
      {
        label: 'Figma',
        value: 'figma',
      },
      {
        label: 'Web Accessibility',
        value: 'web-accessibility',
      },
    ],
    roles: [
      {
        roleName: 'WORK_EXPERIENCE.TELEKOM.ROLES.ENGINEER.TITLE',
        startDate: new Date(2022, 8, 1),
        duration: calculateDuration(new Date(2022, 8, 1)),
        description: [
          'WORK_EXPERIENCE.TELEKOM.ROLES.ENGINEER.DESCRIPTION_PARAGRAPH_1__TEXT',
          'WORK_EXPERIENCE.TELEKOM.ROLES.ENGINEER.DESCRIPTION_PARAGRAPH_2__TEXT',
          'WORK_EXPERIENCE.TELEKOM.ROLES.ENGINEER.DESCRIPTION_PARAGRAPH_3__TEXT',
        ],
      },
    ],
  },
  {
    workplace: 'WORK_EXPERIENCE.EN_CO.TITLE',
    startDate: new Date(2021, 6, 1),
    endDate: new Date(2022, 7, 30),
    duration: calculateDuration(new Date(2021, 6, 1), new Date(2022, 7, 30)),
    stack: [
      {
        label: 'Angular',
        value: 'angular',
      },
      {
        label: 'RxJs',
        value: 'rxjs',
      },
      {
        label: 'TypeScript',
        value: 'typescript',
      },
    ],
    roles: [
      {
        roleName: 'WORK_EXPERIENCE.EN_CO.ROLES.ENGINEER.TITLE',
        startDate: new Date(2021, 6, 1),
        endDate: new Date(2022, 7, 30),
        duration: calculateDuration(new Date(2021, 6, 1), new Date(2022, 8, 1)),
        description: ['WORK_EXPERIENCE.EN_CO.ROLES.ENGINEER.DESCRIPTION_PARAGRAPH_1__TEXT'],
      },
    ],
  },
];

export function calculateDuration(startDate: Date, endDate: Date = new Date()): string {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (endDate.getDate() < startDate.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  if (years > 0 && months > 0) {
    return `${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''}`;
  }

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''}`;
  }

  return `${months} month${months !== 1 ? 's' : ''}`;
}
