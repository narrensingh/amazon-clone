import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCKWhIWKXZ54z5ZnIayC_BkCoVowZz-Chk',
  authDomain: 'clone-react-challenge-adad5.firebaseapp.com',
  databaseURL: 'https://clone-react-challenge-adad5.firebaseio.com',
  projectId: 'clone-react-challenge-adad5',
  storageBucket: 'clone-react-challenge-adad5.appspot.com',
  messagingSenderId: '612707369584',
  appId: '1:612707369584:web:0b2868be32e7752c842ab5',
  measurementId: 'G-R3X291LEWL',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
