import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Artist} from "./artist";
import {AngularFireDatabase} from "angularfire2";
import {AngularFire,  FirebaseListObservable,} from "angularfire2";

@Injectable()
export class ArtistService {
  arists$:FirebaseListObservable<any>;
  art:any;
  constructor(private db: AngularFireDatabase, private af: AngularFire) {
    this.arists$ = af.database.list('artist');
    this.arists$.subscribe(console.log);
  }

  findAllArtist(): Observable<Artist[]>{
    return this.db.list('artist').map(Artist.fromJsonArray);
  }
  insertNewArtist(n: string, c: string, u:string){
      return this.db.list('artist').push({company: c, name: n, picture: u})
                                    .then(
                                      ()=>console.log("List push done"),
                                      console.error
                                    );
  }
  findArtist(key):  Observable<Artist>{
    return this.db.object('artist/' + key);
  }
  removeArtist(key){
    return this.db.list('artist').remove(key)
      .then(
        ()=>console.log("List remove done"),
        console.error
      );
  }
  updateArtist(i, n, c, u){
    this.arists$.update(i, {name: n, company: c, picture: u})
      .then(
        ()=>console.log("List update done"),
        console.error
      );
  }
}
