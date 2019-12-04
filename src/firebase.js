import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAeud4eSLVyE1sHep9hLK12G2ILnov_SAQ',
  authDomain: 'bruno-todolist.firebaseapp.com',
  databaseURL: 'https://bruno-todolist.firebaseio.com',
  projectId: 'bruno-todolist',
  storageBucket: 'bruno-todolist.appspot.com',
  messagingSenderId: '62421198732',
  appId: '1:62421198732:web:b2eadf6e33d542158518a9',
  measurementId: 'G-5W38JMP834',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
