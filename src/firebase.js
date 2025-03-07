import { initializeApp } from "firebase/app";
import {
      getAuth,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut
 } from "firebase/auth";
 import { 
      getFirestore,
      collection,
      addDoc
  } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyBpEu0ItnLbYzR_SRMnrBZRjqu34lIztLY",
  authDomain: "netflix-clone-c522a.firebaseapp.com",
  projectId: "netflix-clone-c522a",
  storageBucket: "netflix-clone-c522a.firebasestorage.app",
  messagingSenderId: "898634426942",
  appId: "1:898634426942:web:11f70fb92ccff2c7313f6f",
  measurementId: "G-VEP3KEEC7H"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
async function signUp(name,email,password){
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db,'user'),{
      uid: user.uid,
      name,
      authProvider: 'local',
      email
    })
  }catch(error){
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }

}
async function signIn(email,password){
  try{
    await signInWithEmailAndPassword(auth, email, password)

  }catch(error){
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}
function logout(){
  signOut(auth)
}

export {auth,db,signIn,signUp,logout}
