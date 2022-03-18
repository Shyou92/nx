import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: '[appsCardImageSize]',
  templateUrl: './card-image-size.component.html',
  styleUrls: ['./card-image-size.component.scss']
})
export class CardImageSizeComponent {

  @Input() cardSize = '';

  @HostBinding('class.large') get getClassSizeLarge() {
    return this.cardSize = 'large';
  }

  @HostBinding('class.small') get getClassSizeSmall() {
    return this.cardSize = 'small';
  }
}
