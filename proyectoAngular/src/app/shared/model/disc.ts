import {Observable} from "rxjs/Rx";
export class Disc {

    constructor(
        public $key:string,
        public name:string,
        public year:string,
        public artistId:string,
        public picture:string) {

    }

    static fromJson({$key, name, year, art, pic}) {
        return new Disc($key, name, year, art, pic);
    }

    static fromJsonArray(json : any[]) : Disc[] {
        return json.map(Disc.fromJson);
    }


}
