import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apps-template-markup',
  templateUrl: './template-markup.component.html',
  styleUrls: ['./template-markup.component.scss'],
})
export class TemplateMarkupComponent implements OnInit {
  @Input() image = '';
  @Input() class = '';
  @Input() cardSize = '';

  ngOnInit() {
    console.log(this.cardSize);
  }
}
