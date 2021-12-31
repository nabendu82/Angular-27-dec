import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicHightlightDirective } from './basic-highlight/basic-highlight.directive';
import { BestDirectiveDirective } from './best-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightlightDirective,
    BestDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
