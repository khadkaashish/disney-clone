//import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIza",
  authDomain: "disney-clone-51109.firebaseapp.com",
  projectId: "disney-clone-51109",
  storageBucket: "disney-clone-51109.appspot.com",
  messagingSenderId: "21502",
  appId: "1:2150",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const storage = getStorage(firebaseApp);
export { auth, provider };
export default db;
