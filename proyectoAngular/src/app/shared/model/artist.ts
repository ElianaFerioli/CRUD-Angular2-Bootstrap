import {Observable} from "rxjs/Rx";
export class Artist {

    constructor(
        public $key:string,
        public company:string,
        public name:string,
        public picture: string,
        public discography: [string]) {

    }

    static fromJson({$key, company, name, picture, discography}) {
        return new Artist($key, company, name, picture, discography);
    }

    static fromJsonArray(json : any[]) : Artist[] {
        return json.map(Artist.fromJson);
    }


}
