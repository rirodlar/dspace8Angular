import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

import { UserGuideContentComponent } from './user-guide-content/user-guide-content.component';

@Component({
  selector: 'ds-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.scss'],
  standalone: true,
  imports: [UserGuideContentComponent],
})
/**
 * Componente que muestra la página "Guía de Usuario" y redirige de inmediato
 * al sitio externo (VitePress), en vez de embeberlo en un iframe.
 */
export class UserGuideComponent implements OnInit {
  /**
   * La URL de la guía de usuario externa
   */
  userGuideUrl = 'https://sic.usach.cl/docs/';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.document.location.href = this.userGuideUrl;
    }
  }
}
