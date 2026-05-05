import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonSize } from '../../types/button-size.type';
import { ButtonType } from '../../types/button-type.type';
import { ButtonVariant } from '../../types/button-variant.type';
import { ButtonIcon } from '../../types/button-icon.type';

@Component({
  selector: 'cv-button',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './cv-button.component.html',
  styleUrl: './cv-button.component.scss',
})
export class CVButtonComponent {
  readonly size = input<ButtonSize>('large');
  readonly type = input<ButtonType>('standard');
  readonly variant = input<ButtonVariant>('primary');
  readonly icon = input<ButtonIcon | undefined>(undefined);
  readonly label = input.required<string>();
  readonly route = input<string | undefined>(undefined);
  readonly href = input<string | undefined>(undefined);
  readonly download = input<string | boolean | undefined>(undefined);
  readonly ariaLabel = input<string | undefined>(undefined);
  readonly title = input<string | undefined>(undefined);

  onButtonClick = output<MouseEvent>();

  readonly buttonClasses = computed(() => [
    'cv-button',
    `cv-button--${this.size()}`,
    `cv-button--${this.variant()}`,
    `cv-button--${this.type()}`,
  ]);

  readonly accessibleLabel = computed(() => this.ariaLabel() ?? this.label());

  readonly iconUrl = computed(() => {
    const icon = this.icon();

    return icon ? `url("/icons/${icon}.svg")` : null;
  });

  readonly isExternal = computed(() => {
    const url = this.href();
    return !!url && /^(https?:)?\/\//.test(url);
  });

  handleClick(event: MouseEvent): void {
    this.onButtonClick.emit(event);
  }
}
