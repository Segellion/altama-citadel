import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
apiKey: "AIzaSyBAhYpYT94iM5b343MfbqrGJBzKpo4AReE",
authDomain: "altama-citadel.firebaseapp.com",
databaseURL: "https://altama-citadel.firebaseio.com",
projectId: "altama-citadel",
storageBucket: "altama-citadel.appspot.com",
messagingSenderId: "1042061303245",
appId: "1:1042061303245:web:aa0ba0d367fed03e7bb884",
measurementId: "G-NE86H4JCCD"
};


export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message)
    }
  }
  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//const token = "noideawhatthisis";
//const discordProvider = new firebase.auth().signInWithCustomToken(token).catch(function(error) {
  // Handle Errors here.
  //var errorCode = error.code;
  //var errorMessage = error.message;
  //var admin = require("firebase-admin");
//  var serviceAccount = require("path/to/serviceAccountKey.json");

//  admin.initializeApp({
//    credential: admin.credential.cert(serviceAccount),
//    databaseURL: "https://altama-citadel.firebaseio.com"
//  });

//});


export default firebase;
