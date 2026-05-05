import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarContainerComponent } from './containers/navbar-container/navbar-container.component';
import { ThemeService } from './services/app-theme.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/app-language.service';
import { CVFooterComponent } from './components/cv-footer-comnponent/cv-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarContainerComponent, CVFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);

  protected readonly title = signal('adamvarga');

  ngOnInit(): void {
    this.themeService.initTheme();
    this.languageService.initLanguage();
  }
}
