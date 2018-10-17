import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character/character.service';
import { CCharacter } from './character/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hanzimanager';
  characterSelected: CCharacter;


  constructor(private charService: CharacterService) {

  }

  ngOnInit() {
    this.charService.newCharacterSelected.subscribe((character: CCharacter) => { this.characterSelected = character });
  }

}


