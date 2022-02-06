// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDu_zwPnE99EThbRML43xxm1R8kcgmwMKY",

  authDomain: "hearyours-9dba8.firebaseapp.com",

  projectId: "hearyours-9dba8",

  storageBucket: "hearyours-9dba8.appspot.com",

  messagingSenderId: "828601384398",

  appId: "1:828601384398:web:976f6047cc273960bfbf9f"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default function getInitApp(){
    return app;
}