import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: '[appsCardListGrid]',
  templateUrl: './card-list-grid.component.html',
  styleUrls: ['./card-list-grid.component.scss']
})
export class CardListGridComponent {

  @Input() cardSize = '';

  @HostBinding('class.large') get getCardGridSizeLarge() {
    return this.cardSize === 'large';
  }

  @HostBinding('class.small') get getCardGridSizeSmall() {
    return this.cardSize === 'small';
  }
}
