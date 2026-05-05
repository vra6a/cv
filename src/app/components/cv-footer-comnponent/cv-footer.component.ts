import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cv-footer-component',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './cv-footer.component.html',
  styleUrl: './cv-footer.component.scss',
})
export class CVFooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
