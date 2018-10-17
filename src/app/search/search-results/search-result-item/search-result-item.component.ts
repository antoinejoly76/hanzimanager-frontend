import { Component, OnInit, Input } from '@angular/core';
import { CCharacter } from 'src/app/character/character.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent implements OnInit {
  constructor() { }
  isSelected: boolean;

  @Input() itemChar: CCharacter
  ngOnInit() {
    this.isSelected = false;
  }

  onClickItem() {
    this.isSelected = !this.isSelected
  }
}
