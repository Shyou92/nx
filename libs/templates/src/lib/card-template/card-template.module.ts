import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSizeComponent } from './button-size/button-size.component';
import { CardImageSizeComponent } from './card-image-size/card-image-size.component';
import { CardListGridComponent } from './card-list-grid/card-list-grid.component';
import { CardSizeComponent } from './card-size/card-size.component';

@NgModule({
  declarations: [ButtonSizeComponent, CardImageSizeComponent, CardListGridComponent, CardSizeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonSizeComponent,
    CardImageSizeComponent,
    CardListGridComponent,
    CardSizeComponent,
  ],

})
export class CardTemplateModule { }
