import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ds-user-guide-content',
  templateUrl: './user-guide-content.component.html',
  styleUrls: ['./user-guide-content.component.scss'],
  standalone: true,
  imports: [TranslateModule],
})
/**
 * Componente que muestra el contenido de "Guía de Usuario"
 */
export class UserGuideContentComponent {
}
