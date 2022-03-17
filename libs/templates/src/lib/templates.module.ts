import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMarkupComponent } from './template-markup/template-markup.component';
import { CardSizeComponent } from './card-size.directive';
import { FormsModule } from '@angular/forms';
import { ButtonSizeComponent } from './button-size/button-size.component';
import { CardImageSizeComponent } from './card-image-size/card-image-size.component';
import { CardListGridComponent } from './card-list-grid/card-list-grid.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    TemplateMarkupComponent,
    CardSizeComponent,
    ButtonSizeComponent,
    CardImageSizeComponent,
    CardListGridComponent,
  ],
  exports: [
    TemplateMarkupComponent,
    CardSizeComponent,
    ButtonSizeComponent,
  ],
})
export class TemplatesModule {}
