import {
  AsyncPipe,
  NgClass,
  NgFor,
  NgIf,
} from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ThemedLangSwitchComponent } from 'src/app/shared/lang-switch/themed-lang-switch.component';

import { ContextHelpToggleComponent } from '../../../../app/header/context-help-toggle/context-help-toggle.component';
import { HeaderComponent as BaseComponent } from '../../../../app/header/header.component';
import { ThemedNavbarComponent } from '../../../../app/navbar/themed-navbar.component';
import { ThemedSearchNavbarComponent } from '../../../../app/search-navbar/themed-search-navbar.component';
import { ThemedAuthNavMenuComponent } from '../../../../app/shared/auth-nav-menu/themed-auth-nav-menu.component';
import { ImpersonateNavbarComponent } from '../../../../app/shared/impersonate-navbar/impersonate-navbar.component';

/**
 * Interface for menu items
 */
interface MenuItem {
  label: string;
  link?: string;
  icon?: string;
  subMenu?: MenuItem[];
}

/**
 * Represents the header with the logo and simple navigation
 */
@Component({
  selector: 'ds-themed-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html',
  standalone: true,
  imports: [NgbDropdownModule, ThemedLangSwitchComponent, RouterLink, ThemedSearchNavbarComponent, ContextHelpToggleComponent, ThemedAuthNavMenuComponent, ImpersonateNavbarComponent, ThemedNavbarComponent, TranslateModule, AsyncPipe, NgIf, NgFor, NgClass],
})
export class HeaderComponent extends BaseComponent implements OnInit {
  public isNavBarCollapsed$: Observable<boolean>;

  /**
   * Menu configuration array
   */
  public menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      link: '/home',
      icon: 'fas fa-home',
    },
    {
      label: 'Personal de Investigación',
      link: '/explore/researcherprofiles',
      icon: 'fas fa-users',
    },
    {
      label: 'Unidad Académica',
      link: '/handle/123456789/43',
      icon: 'fas fa-university',
    },
    {
      label: 'Publicaciones',
      link: '/handle/123456789/8',
      icon: 'fas fa-book',
    },
    {
      label: 'Colecciones',
      icon: 'fas fa-layer-group',
      subMenu: [
        {
          label: 'Datos de Investigacion',
          link: '/handle/123456789/66',
          icon: 'fas fa-database',
        },
        {
          label: 'Divulgacion cientifica',
          link: '/handle/123456789/51',
          icon: 'fas fa-bullhorn',
        },
        {
          label: 'Personal de Investigacion',
          link: '/handle/123456789/3',
          icon: 'fas fa-users',
        },
        {
          label: 'Protecciones',
          link: '/handle/123456789/9',
          icon: 'fas fa-shield-alt',
        },
        {
          label: 'Proyectos Externos',
          link: '/handle/123456789/56',
          icon: 'fas fa-project-diagram',
        },
        {
          label: 'Proyectos Internos',
          link: '/handle/123456789/58',
          icon: 'fas fa-project-diagram',
        },
        {
          label: 'Publicaciones',
          link: '/handle/123456789/8',
          icon: 'fas fa-book',
        },
        {
          label: 'Tesis',
          link: '/handle/123456789/69',
          icon: 'fas fa-graduation-cap',
        },
      ],
    },
  ];

  ngOnInit() {
    super.ngOnInit();
    this.isNavBarCollapsed$ = this.menuService.isMenuCollapsed(this.menuID);
  }
}
