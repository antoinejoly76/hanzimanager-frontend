import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { CCharacter } from 'src/app/character/character.model';
import { CharacterService } from 'src/app/character/character.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  public searchResults: CCharacter[];
  itemCurrentlySelected: CCharacter;
  constructor(private searchService: SearchService, private charService: CharacterService) { }

  ngOnInit() {
    this.searchService.listResults.subscribe(
      (listRes: CCharacter[]) => {
        this.searchResults = listRes;
      });
    this.charService.newCharacterSelected.subscribe((character: CCharacter) => { this.itemCurrentlySelected = character });
  }

  onClickItem(item) {
    this.charService.characterSelected = item;
    this.charService.newCharacterSelected.emit(item);
    console.log(this.charService.characterSelected);
    console.log(item);
  }
}
