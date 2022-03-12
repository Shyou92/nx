import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateMarkupComponent } from './template-markup/template-markup.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TemplateMarkupComponent
  ],
  exports: [
    TemplateMarkupComponent
  ],
})
export class TemplatesModule {}
