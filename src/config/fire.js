import firebase from 'firebase/app/'
import 'firebase/firestore/'
import "firebase/auth/";




const config = {
    apiKey: "AIzaSyATbAdj40vHilZaubxXCLlM5MAFGSPxSxE",
    authDomain: "muvnday-challenge.firebaseapp.com",
    databaseURL: "https://muvnday-challenge.firebaseio.com",
    projectId: "muvnday-challenge",
    storageBucket: "muvnday-challenge.appspot.com",
    messagingSenderId: "940077394930",
    appId: "1:940077394930:web:974db527d9916de3b6596b"
  };

    firebase.initializeApp(config);
    export const database = firebase.firestore();
    export const auth = firebase.auth();

