import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDpQIXWr8SMyNs2xFQo1Ql90haZbQB4iC8",
  authDomain: "motorato.firebaseapp.com",
  projectId: "motorato",
  storageBucket: "motorato.appspot.com",
  messagingSenderId: "869497466101",
  appId: "1:869497466101:web:37e7e37cbe96ee7320a9bc",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.rtdb = app.database();
    this.db = app.firestore();
    this.provider = new app.auth.GoogleAuthProvider();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doLogInWithGoolgle = () => this.auth.signInWithPopup(this.provider);

  doSignOut = () => this.auth.signOut();

  getUser = (uid) => this.db.collection(`users`).doc(uid);

  getVehicle = (vehicle) => this.collection("vehiculos").doc(vehicle);

  doLogInWithGoolgle = () => this.auth.signInWithPopup(this.provider);
}

export default Firebase;
