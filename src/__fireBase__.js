// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwQFYc_RTQwhZe4kc9Mwf_z6AD_rA_3ao",
  authDomain: "fir-react-athor.firebaseapp.com",
  projectId: "fir-react-athor",
  storageBucket: "fir-react-athor.firebasestorage.app",
  messagingSenderId: "753001872950",
  appId: "1:753001872950:web:a3ea6a53fef20a302ca297"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
    export const auth = getAuth(app)
