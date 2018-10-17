import { Component, OnInit } from '@angular/core';
import { CCharacter } from './character.model';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characterToDisplay: CCharacter;
  constructor(public charService: CharacterService) { } // TODO FIX this public, this is to pass compilation

  ngOnInit() {
    this.characterToDisplay = this.charService.characterSelected;
    this.charService.newCharacterSelected.subscribe((character: CCharacter) => { this.characterToDisplay = character });
    console.log(this.characterToDisplay)
    console.log(this.characterToDisplay.comments)
  }

}
