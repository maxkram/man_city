import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyCX78TokV6fUr5dv1DTb9Q0E6D6bl5WIFk",
  authDomain: "man-city-11cb4.firebaseapp.com",
  databaseURL: "https://man-city-11cb4.firebaseio.com",
  projectId: "man-city-11cb4",
  storageBucket: "man-city-11cb4.appspot.com",
  messagingSenderId: "339073466906"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}