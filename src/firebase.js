import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDigtz8M6xKuHUKjTNZ70v1ZSEDEeFlaio",
    authDomain: "arcadiatienda-ar.firebaseapp.com",
    projectId: "arcadiatienda-ar",
    storageBucket: "arcadiatienda-ar.appspot.com",
    messagingSenderId: "860643194160",
    appId: "1:860643194160:web:a27636f2d3d61ecccb84f5"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();