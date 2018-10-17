export class CCharacter {
    _id: String;
    hanzi: String;
    pinyin: String;
    definition: String;
    HSKlevel: number;
    frequency: Number;
    state: Number;
    comments: String[];
    lastModifiedDate: Date;
    constructor(hanzi, pinyin, definition, HSKlevel, frequency, state, lastModifiedDate, comments) {
        this.hanzi = hanzi;
        this.pinyin = pinyin;
        this.definition = definition;
        this.HSKlevel = HSKlevel;
        this.frequency = frequency;
        this.state = state;
        this.comments = comments.splice();
        this.lastModifiedDate = lastModifiedDate;
    }
}


