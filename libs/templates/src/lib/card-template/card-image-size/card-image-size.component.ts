import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'apps-card-image-size',
  styleUrls: ['./card-image-size.component.scss'],
  template: `
      <img class="card__image" src={{this.image}} alt={{this.image}}>
  `
})
export class CardImageSizeComponent {

  @Input() cardSize = '';
  @Input() image = "";

  cardImage = this.image;

  @HostBinding('class.large') get getClassSizeLarge() {
    return this.cardSize === 'large';
  }

  @HostBinding('class.small') get getClassSizeSmall() {
    return this.cardSize === 'small';
  }
}
