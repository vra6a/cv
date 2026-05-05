import { Role } from './role.interface';
import { Technology } from './technology.interface';

export interface Experience {
  workplace: string;
  startDate: Date;
  endDate?: Date;
  duration: string;
  stack: Technology[];
  roles: Role[];
}
