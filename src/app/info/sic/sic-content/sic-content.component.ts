import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ds-sic-content',
  templateUrl: './sic-content.component.html',
  styleUrls: ['./sic-content.component.scss'],
  standalone: true,
  imports: [TranslateModule],
})
/**
 * Componente que muestra el contenido de "¿Qué es SIC?"
 */
export class SicContentComponent {
}
