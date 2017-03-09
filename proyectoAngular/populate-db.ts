import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./src/environments/firebase.config";
import {dbData} from "./db-data";

initializeApp(firebaseConfig);

const artistsRef = database().ref('artist');
const discsRef = database().ref('discography');

dbData.artist.forEach( artist => {

  console.log('adding artist', artist.name);
  const artistRef = artistsRef.push({
      name: artist.name,
      company: artist.company,
      picture: artist.picture
  });
  
  let discKeysPerArtist = [];
  
    artist.discography.forEach((discography:any) =>  {

    console.log('adding disc ', discography.name);

    discKeysPerArtist.push(discsRef.push({
        name: discography.name,
        year: discography.year,
        artistId: artistRef.key
      }).key);

  });
  const association = database().ref('discPerArtist');

  const discPerArtist = association.child(artistRef.key);

  discKeysPerArtist.forEach(discKey => {
    console.log('adding disct to artist ');

    const discArtistAssociation = discPerArtist.child(discKey);

    discArtistAssociation.set(true);
  }); 
});