//import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDq_jffS0B_5pA4rbgvf-aktBjnk61gSH0",
  authDomain: "disney-clone-51109.firebaseapp.com",
  projectId: "disney-clone-51109",
  storageBucket: "disney-clone-51109.appspot.com",
  messagingSenderId: "215020161497",
  appId: "1:215020161497:web:0e5447cd5e33882034b1c8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
// const storage = getStorage(firebaseApp);
export { auth, provider };
export default db;
