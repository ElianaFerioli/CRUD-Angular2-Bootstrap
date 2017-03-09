import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Disc} from "./disc";
import {AngularFire,  FirebaseListObservable,} from "angularfire2";
import 'rxjs/add/operator/do';
import {AngularFireDatabase} from "angularfire2";

@Injectable()
export class DiscService {
  discs$:FirebaseListObservable<any>;
  disc:any;
  constructor(private db: AngularFireDatabase, private af: AngularFire) {
    this.discs$ = af.database.list('discography');
    this.discs$.subscribe(console.log);
  }

  findAllDiscs(): Observable<Disc[]>{
    return this.db.list('discography').map(Disc.fromJsonArray);
  }
  findAllDiscsFromArtist(id: string): Observable<Disc[]>{
    const discs$ = this.db.list('discography', { query: { orderByChild: 'artistId', equalTo: id}});
    discs$.subscribe();
    return  discs$;
  }
  findDisc(key):  Observable<Disc>{
    return this.db.object('discography/' + key);
  }

  insertNewDisc(n: string, y: string, u:string, a: string){
      return this.db.list('discography').push({name: n, year: y, picture: u, artistId: a})
                                    .then(
                                      ()=>console.log("List push done"),
                                      console.error
                                    );
  }
  removeDisc(key){
    return this.db.list('discography').remove(key)
      .then(
        ()=>console.log("List remove done"),
        console.error
      );
  }
  updateDisc(i, n, a, u){
    this.discs$.update(i, {name: n, year: a, picture: u})
      .then(
        ()=>console.log("List update done"),
        console.error
      );
  }
}
