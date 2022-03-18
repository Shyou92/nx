import { Component, HostBinding, Input, } from '@angular/core';

@Component({
  selector: 'apps-button-size',
  templateUrl: './button-size.component.html',
  styleUrls: ['./button-size.component.scss']
})
export class ButtonSizeComponent {

  @Input() cardSize = ''

  @HostBinding('class.large') get getClassSizeLarge() {
    return this.cardSize === 'large';
  }

  @HostBinding('class.small') get getClassSizeSmall() {
    return this.cardSize === 'small';
  }

}
