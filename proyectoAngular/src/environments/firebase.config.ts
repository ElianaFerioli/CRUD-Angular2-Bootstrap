
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
	apiKey: "AIzaSyA5Swtuk3cE3tCTpgWKHBzgweoL0QEHsMo",
    authDomain: "musica-cb597.firebaseapp.com",
    databaseURL: "https://musica-cb597.firebaseio.com",
    storageBucket: "musica-cb597.appspot.com",
    messagingSenderId: "743487432472"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
