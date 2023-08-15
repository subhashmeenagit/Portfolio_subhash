// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBdtyvDpo9dwaCxai2Ef8xh4rmK10cJ2s",
    authDomain: "subhash-portfolio-react.firebaseapp.com",
    projectId: "subhash-portfolio-react",
    storageBucket: "subhash-portfolio-react.appspot.com",
    messagingSenderId: "482654439636",
    appId: "1:482654439636:web:1aff78df1d036791635341"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()







