import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    AuthorDetailComponent,
    HighlightDirective,
    DateCountPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { constructor() {
}}
