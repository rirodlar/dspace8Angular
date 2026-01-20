import { Component } from '@angular/core';
import { SicContentComponent } from './sic-content/sic-content.component';

@Component({
  selector: 'ds-sic',
  templateUrl: './sic.component.html',
  styleUrls: ['./sic.component.scss'],
  standalone: true,
  imports: [SicContentComponent],
})
/**
 * Componente que muestra la página "¿Qué es SIC?"
 */
export class SicComponent {
}
