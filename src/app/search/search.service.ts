import { Injectable, EventEmitter, Output } from '@angular/core';
import { SearchResolveMockService } from './mock-services/search-resolve-mock-service';
import { CCharacter } from '../character/character.model';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchResults;

  listResults = new EventEmitter<CCharacter[]>();


  uri = environment.serverUrl;


  // getInputTypeSelected() {
  //   // return this.inputTypeSelected
  // }
  constructor(private searchMockService: SearchResolveMockService, private http: HttpClient) {
    // this.inputTypeSelected = 'Hanzi';
  }

  getCCharacterbyHanzi(searchString: String) {
    var arrayTemp: CCharacter[] = [];
    this.http.get(`${this.uri}/characters/search/hanzi/${searchString}`).subscribe(data => {
      this.searchResults = data;
      arrayTemp.push(this.searchResults);

      this.listResults.emit(arrayTemp);
    }, err => { console.log(err) }, () => { console.log("fion") }

    );
  }








  onInit() {

  }
}
