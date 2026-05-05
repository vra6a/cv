import { Technology } from './technology.interface';

export interface Project {
  title: string;
  shortDescription: string[];
  imageUrl: string;
  url: string;
  stack: Technology[];
}
