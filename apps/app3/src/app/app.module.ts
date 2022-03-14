import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TemplatesModule } from '@apps/templates';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, TemplatesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
