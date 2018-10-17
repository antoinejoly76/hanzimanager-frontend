import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CharacterService } from '../character.service';
import { CCharacter } from '../character.model';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent implements OnInit {
  tempState;
  tempStateN;
  @ViewChild('tempComment') tempcomment;


  constructor(private charService: CharacterService) { }

  ngOnInit() {
    this.tempState = this.charService.getState();
    this.charService.newCharacterSelected.subscribe((character: CCharacter) => {
      this.tempState = this.charService.getState()
    });
  }

  test() {
    "echo test"
  }

  onClickUpdate() {
    console.log("THIS IS TEMPSTATE");
    console.log(this.tempState);
    switch (this.tempState) {

      case "unknown":
        this.tempStateN = 0;
        break;
      case "encountered":
        this.tempStateN = 1;
        break;
      case "mastered":
        this.tempStateN = 2;
        break;
    }
    this.charService.updateCharacter(this.tempStateN, this.tempcomment.nativeElement.value);

  }



}
