import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../search.service';
// TODO this is a test

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @ViewChild('searchInputText') searchString;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onStartSearch() {
    this.searchService.getCCharacterbyHanzi(this.searchString.nativeElement.value);
  }
}
