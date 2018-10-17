import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

//TODO make the mock service asynchronous

export class SearchResolveMockService {
    resolveSearch(searchString: String, searchType) {  //TO DO handle more cases, for now the search string is ignored
        return this.mockQueryHanzi();
    }

    mockQueryHanzi() {
        return [{
            "hanzi": "的",
            "pinyin": "de",
            "definition": "possessive, adjectival suffix",
            "frequency": 1,
            "state": 0,
            "HSKlevel": 2
        },
        {
            "hanzi": "一",
            "pinyin": "yī",
            "definition": "one; a, an; alone",
            "frequency": 2,
            "state": 1,
            "HSKlevel": 1
        },
        {
            "hanzi": "是",
            "pinyin": "shì",
            "definition": "indeed, yes, right; to be; demonstrative pronoun, this, that",
            "frequency": 3,
            "state": 2,
            "HSKlevel": 4
        }];
    }


    // new Character("是", "shì", "indeed, yes, right; to be; demonstrative pronoun, this, that", 3, 1)
    // new Character("不", "bù", "no, not; un-; negative prefix", 4, 2)
    // new Character("了", "le", "to finish; particle of completed action", 5, 1)
    // new Character("在", "zài", "be at, in, on; consist in, rest", 6, 2)
    // new Character("人", "rén", "man; people; mankind; someone else", 7, 2)
    // new Character("有", "yǒu", "have, own, possess; exist", 8, 1)
    // new Character("我", "wǒ", "our, us, i, me, my, we", 9, 1)
    // new Character("他", "tā", "other, another; he, she, it", 10, 1)



}