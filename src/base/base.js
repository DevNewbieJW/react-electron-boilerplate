import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyCh1p4z9krWSJSalwn8_BAZFDy-jx0VBSw",
  authDomain: "notes-62722.firebaseapp.com",
  projectId: "notes-62722",
  storageBucket: "notes-62722.appspot.com",
  messagingSenderId: "349657917217",
  appId: "1:349657917217:web:dd1e20408c36073c24c060",
};

let base;

if (base === undefined) {
  base = firebase.initializeApp(firebaseConfig);
}

export default base;
