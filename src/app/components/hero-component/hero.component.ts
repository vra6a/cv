import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CVButtonComponent } from '../cv-button-component/cv-button.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'cv-hero-component',
  standalone: true,
  imports: [TranslateModule, CVButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly translateService = inject(TranslateService);

  readonly cvHref = computed(() =>
    this.currentLang() === 'hu'
      ? 'cv/CV_Varga_Adam_Marcell_hun.pdf'
      : 'cv/CV_Varga_Adam_Marcell_eng.pdf',
  );

  readonly cvDownloadName = computed(() =>
    this.currentLang() === 'hu' ? 'CV_Varga_Adam_Marcell_hun.pdf' : 'CV_Varga_Adam_Marcell_eng.pdf',
  );

  readonly currentLang = toSignal(
    this.translateService.onLangChange.pipe(
      map((event) => event.lang),
      startWith(this.translateService.currentLang || this.translateService.defaultLang),
    ),
    { initialValue: this.translateService.currentLang || this.translateService.defaultLang },
  );
}
