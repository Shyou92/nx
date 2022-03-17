import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: '[appsCardSize]',
  templateUrl: './card-size.directive.html',
  styleUrls: ['./card-size.directive.scss'],
})
export class CardSizeComponent {

  @Input() cardSize = '';
  
  @HostBinding('class.large') get getClassSizeLarge() {
    return this.cardSize === "large";
  };

  @HostBinding('class.small') get getClassSizeSmall() {
    return this.cardSize === "small";
  };
}
