import { Component, computed, input, signal } from '@angular/core';
import { Technology } from '../../interfaces/technology.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cv-chip-list-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './cv-chip-list.component.html',
  styleUrl: './cv-chip-list.component.scss',
})
export class CVChipListComponent {
  readonly technologyList = input<Technology[]>([]);

  readonly isExpanded = signal(false);

  readonly visibleList = computed<Technology[]>(() => {
    const list = this.technologyList();

    if (this.isExpanded() || list.length <= 5) {
      return list;
    }

    return [...list.slice(0, 5), { label: '···', value: 'more' }];
  });

  showMore(): void {
    this.isExpanded.set(true);
  }
}
