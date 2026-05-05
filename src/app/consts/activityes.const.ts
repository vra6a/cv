import { Activity } from '../interfaces/activity.interface';
import { calculateDuration } from './experience.const';

export const activityList: Activity[] = [
  {
    label: 'ACTIVITIES.CRAFT_HACK.TITLE',
    startDate: new Date(2021, 5, 1),
    description: [
      'ACTIVITIES.CRAFT_HACK.DESCRIPTION_PARAGRAPH_1__TEXT',
      'ACTIVITIES.CRAFT_HACK.DESCRIPTION_PARAGRAPH_2__TEXT',
    ],
  },
  {
    label: 'ACTIVITIES.SIMONYI_KONF.TITLE',
    startDate: new Date(2020, 11, 1),
    endDate: new Date(2021, 4, 1),
    description: [
      'ACTIVITIES.SIMONYI_KONF.DESCRIPTION_PARAGRAPH_1__TEXT',
      'ACTIVITIES.SIMONYI_KONF.DESCRIPTION_PARAGRAPH_2__TEXT',
    ],
  },
  {
    label: 'ACTIVITIES.SCHDESIGN.TITLE',
    startDate: new Date(2020, 3, 1),
    endDate: new Date(2021, 2, 1),
    description: [
      'ACTIVITIES.SCHDESIGN.DESCRIPTION_PARAGRAPH_1__TEXT',
      'ACTIVITIES.SCHDESIGN.DESCRIPTION_PARAGRAPH_2__TEXT',
    ],
  },
];
