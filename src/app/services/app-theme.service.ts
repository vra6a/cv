import { Injectable, computed, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'app-theme';
  readonly theme = signal<AppTheme>('light');

  readonly toggleLabel = computed(() =>
    this.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
  );

  readonly toggleIconSrc = computed(() =>
    this.theme() === 'dark' ? 'icons/sun-dim-fill.svg' : 'icons/moon-fill.svg',
  );

  readonly toggleIconAlt = computed(() =>
    this.theme() === 'dark' ? 'Light mode icon' : 'Dark mode icon',
  );

  initTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey) as AppTheme | null;

    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.setTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(prefersDark ? 'dark' : 'light');
  }

  toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  setTheme(theme: AppTheme): void {
    this.theme.set(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
  }
}
