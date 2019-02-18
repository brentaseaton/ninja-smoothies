import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC919vvYQpZopf-W6D3rActAYlab-ttsCc",
  authDomain: "udemy-ninja-smoothies-4f1ab.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-4f1ab.firebaseio.com",
  projectId: "udemy-ninja-smoothies-4f1ab",
  storageBucket: "udemy-ninja-smoothies-4f1ab.appspot.com",
  messagingSenderId: "730470647874"
};

const firebaseApp = firebase.initializeApp(config);

// export firestore database
export default firebaseApp.firestore()