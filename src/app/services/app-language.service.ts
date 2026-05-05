import { Injectable, computed, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'en' | 'hu';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'app-language';
  private readonly translateService = inject(TranslateService);

  private readonly _currentLanguage = signal<AppLanguage>('en');

  readonly currentLanguage = computed(() => this._currentLanguage());

  readonly toggleLanguageLabel = computed(() =>
    this.currentLanguage() === 'hu'
      ? this.translateService.instant('NAVBAR.LANGUAGE_SWITCH_TO_EN__TEXT')
      : this.translateService.instant('NAVBAR.LANGUAGE_SWITCH_TO_HU__TEXT'),
  );

  readonly toggleLanguageShortLabel = computed(() =>
    this.currentLanguage() === 'hu' ? 'EN' : 'HU',
  );

  initLanguage(): void {
    const saved = localStorage.getItem(this.storageKey) as AppLanguage | null;

    const browserLang = this.translateService.getBrowserLang();
    const browserDefault: AppLanguage = browserLang === 'hu' ? 'hu' : 'en';

    const lang: AppLanguage = saved === 'hu' || saved === 'en' ? saved : browserDefault;

    this.setLanguage(lang);
  }

  setLanguage(lang: AppLanguage): void {
    this.translateService.use(lang);
    this._currentLanguage.set(lang);
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.lang = lang;
  }

  toggleLanguage(): void {
    const nextLanguage: AppLanguage = this.currentLanguage() === 'hu' ? 'en' : 'hu';
    this.setLanguage(nextLanguage);
  }
}
