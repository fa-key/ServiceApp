import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBj1-JJeEoJLwYpIEXEOjvF-1Z6DHkupjo',
  authDomain: 'serviceapp-b95f9.firebaseapp.com',
  databaseURL: 'https://serviceapp-b95f9-default-rtdb.firebaseio.com',
  projectId: 'serviceapp-b95f9',
  storageBucket: 'serviceapp-b95f9.appspot.com',
  messagingSenderId: '634733488189',
  appId: '1:634733488189:web:c026847aeb2514e44a2254',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const dataRef = firebase.database().ref();
