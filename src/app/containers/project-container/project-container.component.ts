import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from '../../interfaces/project.interface';
import { projectList } from '../../consts/projects.const';

@Component({
  selector: 'app-project-container',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project-container.component.html',
  styleUrl: './project-container.component.scss',
})
export class ProjectContainerComponent {
  private readonly route = inject(ActivatedRoute);

  readonly projectData = signal<Project | undefined>(undefined);

  constructor() {
    this.route.params.subscribe(({ projectId }: Params) => {
      if (projectId) {
        this.projectData.set(projectList.find((project) => project.url === projectId));
        console.log(this.projectData());
      }
    });
  }
}
