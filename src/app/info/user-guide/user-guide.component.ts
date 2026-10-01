import { Component } from '@angular/core';

import { SafeUrlPipe } from '../../shared/utils/safe-url-pipe';
import { UserGuideContentComponent } from './user-guide-content/user-guide-content.component';

@Component({
  selector: 'ds-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.scss'],
  standalone: true,
  imports: [UserGuideContentComponent, SafeUrlPipe],
})
/**
 * Componente que muestra la página "Guía de Usuario", embebiendo el sitio
 * externo (VitePress) a pantalla completa dentro del layout de SIC.
 */
export class UserGuideComponent {
  /**
   * La URL de la guía de usuario externa
   */
  userGuideUrl = 'https://sic.usach.cl/docs/';
}
