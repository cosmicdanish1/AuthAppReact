// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkmgWQLCj-RqboYd9d1inDMEUMqIxf_3w",
  authDomain: "fir-auth-5c23b.firebaseapp.com",
  projectId: "fir-auth-5c23b",
  storageBucket: "fir-auth-5c23b.appspot.com",
  messagingSenderId: "131087352018",
  appId: "1:131087352018:web:fe08f5d4d533c4e3992d0b"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
