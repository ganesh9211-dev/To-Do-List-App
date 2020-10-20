 
import firebase from "firebase";

const firebaseApp=firebase.initializeApp({

    apiKey: "AIzaSyCY4Il03n7V7SBZEJ1RcVtUKcg2fugXOe8",
    authDomain: "todo-app-c66dc.firebaseapp.com",
    databaseURL: "https://todo-app-c66dc.firebaseio.com",
    projectId: "todo-app-c66dc",
    storageBucket: "todo-app-c66dc.appspot.com",
    messagingSenderId: "742246755790",
    appId: "1:742246755790:web:1b96194c1e3ba8ed9d0f9f",
    measurementId: "G-E8JVRDM4NP"
    
});

const db = firebaseApp.firestore();

export default db; 
