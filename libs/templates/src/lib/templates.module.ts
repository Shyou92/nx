import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMarkupComponent } from './template-markup/template-markup.component';
import { FormsModule } from '@angular/forms';
import { CardTemplateModule } from './card-template/card-template.module';

@NgModule({
  imports: [CommonModule, FormsModule, CardTemplateModule],
  declarations: [
    TemplateMarkupComponent,
  ],
  exports: [
    TemplateMarkupComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TemplatesModule {}
