// Import the functions you need from the SDKs you need
import firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCr9WRmYG1atD93sy5vMoYR4LBlH-XrKpU",
  authDomain: "letterboxdlivros.firebaseapp.com",
  databaseURL: "https://letterboxdlivros-default-rtdb.firebaseio.com",
  projectId: "letterboxdlivros",
  storageBucket: "letterboxdlivros.appspot.com",
  messagingSenderId: "943963499875",
  appId: "1:943963499875:web:d61db7d72023584204f756"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;