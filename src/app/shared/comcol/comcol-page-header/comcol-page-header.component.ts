import { NgIf } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'ds-comcol-page-header',
  styleUrls: ['./comcol-page-header.component.scss'],
  templateUrl: './comcol-page-header.component.html',
  imports: [
    NgIf,
  ],
  standalone: true,
})
export class ComcolPageHeaderComponent {
  @Input() name: string;

  /**
   * Set to true for free-text titles (e.g. an item's title) that shouldn't
   * get the uppercase display font used for short structural headings
   * (community/collection names).
   */
  @Input() isLongTitle = false;
}
