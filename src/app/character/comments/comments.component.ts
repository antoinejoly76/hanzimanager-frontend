import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comment: String;
  @Input() index: number;
  constructor(private charService: CharacterService) { }

  ngOnInit() {
  }


  removeComment(e: EventListenerObject) {
    console.log(e);
    console.log(this.index);
    let ind = this.index - 1
    this.charService.removeComment(ind);
  }

}
