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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faThumbsUp as farThumbsup } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as fasThumbsup } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown as farThumbsdown } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown as fasThumbsdown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt as farTrash } from '@fortawesome/free-regular-svg-icons';
import { faTrash as fasTrash } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    AuthorDetailComponent,
    HighlightDirective,
    DateCountPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { constructor(library: FaIconLibrary) {
  library.addIcons(fasThumbsup, farThumbsup, farThumbsdown, fasThumbsdown, fasTrash, farTrash);
}}
