import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCaNMLcD06nSItGuzEzfMydJ00i0vYPAPk",
    authDomain: "citnova-7139d.firebaseapp.com",
    databaseURL: "https://citnova-7139d.firebaseio.com",
    projectId: "citnova-7139d",
    storageBucket: "citnova-7139d.appspot.com",
    messagingSenderId: "534173522943"
};

export function signOut(){
    return firebase.auth().signOut()
        .then(()=>{
            localStorage.removeItem('userInfo');
            localStorage.removeItem('userToken');
        });
};


firebase.initializeApp(config);

export default firebase;