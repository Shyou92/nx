import { Component, Input } from '@angular/core';

import { mockData } from '../mock/mock';

@Component({
  selector: 'apps-template-markup',
  templateUrl: './template-markup.component.html',
  styleUrls: ['./template-markup.component.scss'],
})
export class TemplateMarkupComponent {
  @Input() image = '';
  @Input() class = '';
  @Input() cardSize = '';
  cardList = mockData;
}
