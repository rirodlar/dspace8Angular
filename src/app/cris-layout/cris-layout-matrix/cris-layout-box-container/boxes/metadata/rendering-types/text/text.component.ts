import {
  Component,
  OnInit,
} from '@angular/core';
import { NgIf } from '@angular/common';

import { RenderingTypeValueModelComponent } from '../rendering-type-value.model';

/**
 * This component renders the text metadata fields
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'span[ds-text]',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class TextComponent extends RenderingTypeValueModelComponent implements OnInit {

  /**
   * Whether the metadata value contains HTML tags or is a URL
   */
  isHtml = false;

  /**
   * Whether the metadata value is a URL
   */
  isLink = false;

  ngOnInit() {
    const htmlTagRegex = /<.*?>/;
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    this.isHtml = htmlTagRegex.test(this.metadataValue.value);
    this.isLink = urlRegex.test(this.metadataValue.value);
  }

}
