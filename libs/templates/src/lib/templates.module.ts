import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMarkupComponent } from './template-markup/template-markup.component';
import { CardSizeComponent } from './card-size.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    TemplateMarkupComponent,
    CardSizeComponent,
  ],
  exports: [
    TemplateMarkupComponent,
    CardSizeComponent
  ],
})
export class TemplatesModule {}
