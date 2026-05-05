import { Component, input } from '@angular/core';

@Component({
  selector: 'cv-card-component',
  standalone: true,
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.scss',
})
export class CVCardComponent {
  image = input<string | null>(null);
  imageAlt = input<string>('');
}
