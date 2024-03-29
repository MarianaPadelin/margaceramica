// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

const auth = getAuth(app)

export const login = async({email, password}) => {

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch(error){
    console.error(error)
  }
  

}


    
