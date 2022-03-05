
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrZ6bg_GQDr9bTrqHX_SExg5JeWTxAfhs",
  authDomain: "project-prueba-bb9c8.firebaseapp.com",
  projectId: "project-prueba-bb9c8",
  storageBucket: "project-prueba-bb9c8.appspot.com",
  messagingSenderId: "667651684665",
  appId: "1:667651684665:web:b388b974188be1c74590e8"
};

// Initialize Firebase



// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default function getInitApp(){
    return app;
}