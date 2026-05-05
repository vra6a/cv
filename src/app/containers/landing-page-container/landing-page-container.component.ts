import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero.component';
import { TranslateModule } from '@ngx-translate/core';
import { CVCardComponent } from '../../components/cv-card-component/cv-card.component';
import { CVButtonComponent } from '../../components/cv-button-component/cv-button.component';
import { projectList } from '../../consts/projects.const';
import { CVChipListComponent } from '../../components/cv-chip-list-component/cv-chip-list.component';
import { educationList } from '../../consts/education.const';
import { experienceList } from '../../consts/experience.const';
import { DatePipe } from '@angular/common';
import { activityList } from '../../consts/activityes.const';

@Component({
  selector: 'cv-landing-page-container',
  standalone: true,
  imports: [
    HeroComponent,
    TranslateModule,
    DatePipe,
    CVCardComponent,
    CVButtonComponent,
    CVChipListComponent,
  ],
  templateUrl: './landing-page-container.component.html',
  styleUrl: './landing-page-container.component.scss',
})
export class LandingPageContainerComponent {
  readonly projectList = projectList;
  readonly educationList = educationList;
  readonly experienceList = experienceList;
  readonly activityList = activityList;
}
