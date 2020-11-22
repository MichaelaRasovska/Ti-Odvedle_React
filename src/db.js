import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCiRY1FXRJ2Lhk4ftVrqeVQ0ELtekMlVaY',
  authDomain: 'ti-odvedle.firebaseapp.com',
  databaseURL: 'https://ti-odvedle.firebaseio.com',
  projectId: 'ti-odvedle',
  storageBucket: 'ti-odvedle.appspot.com',
  messagingSenderId: '778376315034',
  appId: '1:778376315034:web:1d1b514283da5b76a7df23',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
