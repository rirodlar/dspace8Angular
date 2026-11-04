import {
  AsyncPipe,
  NgClass,
  NgFor,
  NgIf,
} from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ThemedHeaderComponent } from '../../../../app/header/themed-header.component';
import { HeaderNavbarWrapperComponent as BaseComponent } from '../../../../app/header-nav-wrapper/header-navbar-wrapper.component';
import { ThemedNavbarComponent } from '../../../../app/navbar/themed-navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';
import {
  HEADER_MENU_ITEMS,
  MenuItem,
} from '../header/header-menu-items';

/**
 * This component represents a wrapper for the horizontal navbar and the header
 */
@Component({
  selector: 'ds-themed-header-navbar-wrapper',
  styleUrls: ['header-navbar-wrapper.component.scss'],
  templateUrl: 'header-navbar-wrapper.component.html',
  standalone: true,
  imports: [NgClass, ThemedHeaderComponent, ThemedNavbarComponent, AsyncPipe, TranslateModule, NgIf, NgFor, RouterLink],
  animations: [slideMobileNav],
})
export class HeaderNavbarWrapperComponent extends BaseComponent {
  /**
   * Same site menu shown in the desktop #header-bottom row (header.component.html),
   * repeated here so mobile users (where that row is hidden) can still reach it
   * via the hamburger panel.
   */
  public menuItems: MenuItem[] = HEADER_MENU_ITEMS;
}
