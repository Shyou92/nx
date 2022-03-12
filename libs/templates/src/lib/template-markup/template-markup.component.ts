import { Component, Input } from '@angular/core';

@Component({
  selector: 'apps-template-markup',
  templateUrl: './template-markup.component.html',
  styleUrls: ['./template-markup.component.scss'],
})
export class TemplateMarkupComponent {
  @Input() image = '';
  @Input() class = '';
}
