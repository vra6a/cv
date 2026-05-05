import { Routes } from '@angular/router';
import { LandingPageContainerComponent } from './containers/landing-page-container/landing-page-container.component';
import { ProjectContainerComponent } from './containers/project-container/project-container.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageContainerComponent,
    title: 'ROUTES.LANDING__TITLE',
  },
  {
    path: 'projects/:projectId',
    component: ProjectContainerComponent,
    title: 'ROUTES.PROJECTS__TITLE',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
