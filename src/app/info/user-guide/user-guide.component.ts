import { Component } from '@angular/core';
import { UserGuideContentComponent } from './user-guide-content/user-guide-content.component';

@Component({
  selector: 'ds-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.scss'],
  standalone: true,
  imports: [UserGuideContentComponent],
})
/**
 * Componente que muestra la página "Guía de Usuario"
 */
export class UserGuideComponent {
}
