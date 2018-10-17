import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { CharacterComponent } from './character/character.component';
import { CharacterEditComponent } from './character/character-edit/character-edit.component';
import { CommentsComponent } from './character/comments/comments.component';
import { SearchResultItemComponent } from './search/search-results/search-result-item/search-result-item.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownDirective } from './directives/dropdown-directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchInputComponent,
    SearchResultsComponent,
    CharacterComponent,
    CharacterEditComponent,
    CommentsComponent,
    SearchResultItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
