import { Injectable, EventEmitter, OnInit, ViewChild } from "@angular/core";
import { CCharacter } from "./character.model";
import { CCharacterEdit } from "./character-edit/characteredit.model"
import { HttpClient } from '@angular/common/http'
import { SearchService } from "../search/search.service";
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})



export class CharacterService implements OnInit {
    characterSelected: CCharacter;
    uri = environment.serverUrl;
    newCharacterSelected = new EventEmitter<CCharacter>();
    body;

    constructor(private searchService: SearchService, private http: HttpClient) { }



    ngOnInit() {
        this.newCharacterSelected.subscribe((char: CCharacter) => {
            this.characterSelected = char;

        })
    }

    updateCharacter(state, comment) {
        var s = new CCharacterEdit(state, comment);
        this.body = (JSON.stringify(s));

        this.http.post(`${this.uri}/characters/update/${this.characterSelected._id}`, s).subscribe(data => {
            this.getCCharacterbyID(this.characterSelected._id);
            console.log(data);
        }, err => console.log(err));
    }

    removeComment(index: Number) {
        console.log("inside Remove comment")
        this.http.post(`${this.uri}/characters/${this.characterSelected._id}/comments/delete/${index}`, {}).subscribe(data => {
            this.getCCharacterbyID(this.characterSelected._id);
            console.log(this.characterSelected);
            console.log(data);
        }, err => console.log(err))
    }

    getState() {

        if (this.characterSelected.state === 0) {
            return "unknown"
        } else if (this.characterSelected.state === 1) {
            return "encountered"
        } else if (this.characterSelected.state === 2) {
            return "mastered"
        } else return "??";
    }

    getLastModifiedDate() {
        return this.characterSelected.lastModifiedDate.toString();
    }
    getHSKLevel() {
        switch (this.characterSelected.HSKlevel) {
            case 1:
                return "HSK1";
            case 2:
                return "HSK2";
            case 3:
                return "HSK3";
            case 4:
                return "HSK4";
            case 5:
                return "HSK5";
            case 6:
                return "HSK6";
            default:
                return "Not HSK";
        }
    }

    getCCharacterbyID(searchString: String) {
        this.http.get(`${this.uri}/characters/${searchString}`).subscribe(data => {
            this.characterSelected = <CCharacter>(data);
            this.newCharacterSelected.emit(this.characterSelected);

        }, err => { console.log(err) }, () => { console.log("fion") }
        );
    }

}
