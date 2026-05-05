import { AfterViewInit, Component, computed, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { ThemeService } from '../../services/app-theme.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/app-language.service';
import { NavItem } from '../../interfaces/nav-item.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'cv-navbar-container',
  standalone: true,
  imports: [TranslatePipe, RouterLink],
  templateUrl: './navbar-container.component.html',
  styleUrl: './navbar-container.component.scss',
})
export class NavbarContainerComponent implements AfterViewInit {
  readonly themeService = inject(ThemeService);
  readonly languageService = inject(LanguageService);
  readonly location = inject(Location);
  readonly router = inject(Router);

  readonly isMenuOpen = signal(false);
  readonly activeFragment = signal<string | null>(null);

  readonly themeToggleLabel = computed(() => {
    return this.themeService.theme() === 'dark'
      ? 'NAVBAR.A11Y.THEME_SWITCH_TO_LIGHT__TEXT'
      : 'NAVBAR.A11Y.THEME_SWITCH_TO_DARK__TEXT';
  });
  readonly languageToggleLabel = computed(() => {
    return this.languageService.currentLanguage() === 'hu'
      ? 'NAVBAR.A11Y.LANGUAGE_SWITCH_TO_EN__TEXT'
      : 'NAVBAR.A11Y.LANGUAGE_SWITCH_TO_HU__TEXT';
  });
  readonly languageToggleText = computed(() => {
    return this.languageService.currentLanguage() === 'hu' ? 'EN' : 'HU';
  });

  readonly navItems: NavItem[] = [
    { label: 'NAVBAR.PROJECTS__TEXT', fragment: 'projects' },
    { label: 'NAVBAR.ABOUT__TEXT', fragment: 'about' },
    { label: 'NAVBAR.CONTACT__TEXT', fragment: 'contact' },
  ];

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      this.updateActiveFragmentFromScroll();
    });
  }

  @HostListener('window:scroll')
  updateActiveFragmentFromScroll(): void {
    const currentSection = this.getCurrentSection();

    if (!currentSection) {
      this.activeFragment.set(null);
      return;
    }

    if (this.activeFragment() === currentSection.fragment) {
      return;
    }

    this.activeFragment.set(currentSection.fragment);
    this.location.replaceState('', '', currentSection.fragment);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
    this.closeMenu();
  }

  async scrollToSection(event: Event, fragment: string): Promise<void> {
    event.preventDefault();

    if (this.location.path() !== '') {
      await this.router.navigate(['/']);
    }

    requestAnimationFrame(() => {
      this.scrollToFragment(fragment);
    });
  }

  scrollToFragment(fragment: string): void {
    const section = document.getElementById(fragment);
    const navbar = document.querySelector('.navbar__header') as HTMLElement | null;

    if (!section) {
      return;
    }

    const navbarHeight = navbar?.offsetHeight ?? 0;
    const targetY = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });

    this.activeFragment.set(fragment);
    this.location.replaceState('', '', fragment);
    this.closeMenu();
  }

  getCurrentSection() {
    const offset = 120;
    return this.navItems
      .map((item) => ({
        fragment: item.fragment,
        element: document.getElementById(item.fragment),
      }))
      .filter((item): item is { fragment: string; element: HTMLElement } => !!item.element)
      .reverse()
      .find((item) => window.scrollY + offset >= item.element.offsetTop);
  }

  async scrollToTop(event: Event): Promise<void> {
    event.preventDefault();

    if (this.location.path() !== '') {
      await this.router.navigate(['/']);
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    this.activeFragment.set(null);
    this.location.replaceState('');
    this.closeMenu();
  }
}
