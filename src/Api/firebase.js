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


export function getOrCreateChat(userId2){


return new Promise(function(res, rej){


  firebase.auth().onAuthStateChanged(function(user) {

      let status = true;
       console.log('elUser:', user);

       let elChat = firebase.database().ref('chats/' + user.uid + '/' + userId2)


    const chat1 = firebase.database().ref('chats/' + user.uid + '/' + userId2);
    const chat2 = firebase.database().ref('chats/' + userId2 + '/' + user.uid)



       .once('value')
       .then(snap=>{
         console.log(snap.val());
         if(snap.val() !== null) {
           res(converToArray(snap.val()));
         }
        //  if(snap.val() === null) rej(false);

       }); // then


      elChat = firebase.database().ref('chats/' + userId2 + '/' + user.uid)

       .once('value')
       .then(snap=>{
         console.log(snap.val());
         if(snap.val() !== null) {
           res(converToArray(snap.val()));
         }else{
           res([]);
         }
        //  if(snap.val() === null) rej(false);

       }); // then

      //  if(status){
      //    elChat = firebase.database().ref('chats/' + userId2 + '/' + user.uid)
      //     .push({
      //       id:0,
      //       name:'Nuevo todo',
      //       text:'Orale uto!'
      //     });
      //  }
      // res([]);


     }); // user



});

function converToArray(obj){
  let array = [];
  for (let key in obj){
    let i = obj[key];
    i['id'] = key;
    array.push(i);
  }
  return array;
}






  //   if (snap.val() === null){
  //     firebase.database().ref('chats/' + chatWith + '/' + user.uid)
  //     .once('value')
  //     .then(snap=>{
  //       if(snap.val() === null){
  //         firebase.database().ref('chats/' + user.uid + '/' + chatWith)
  //         .push({
  //           id:0,
  //           name:'nueva conversación',
  //           date:Date.now(),
  //           text:'Mi primer mensaje'
  //
  //         })
  //       }
  //     })
  //   } else{
  //     for (var key in snap.val()){
  //       let each = snap.val()[key];
  //       each['id'] = key;
  //       this.state.chat.push(each);
  //     }
  //     this.setState({chat:this.state.chat});
  //     console.log('lo que trajo:', this.state.chat);
  //     this.setState({messages:this.state.chat});
  //   }
  // });




}





export function addMessage(userId2, value){


    firebase.auth().onAuthStateChanged(function(user) {

<<<<<<< HEAD
         let elChat = firebase.database().ref('chats/' + user.uid + '/' + userId2)
         .once('value')
         .then(snap=>{
           if(snap.val() !== null){
             elChat.push({
=======
      const chat1 = firebase.database().ref('chats/' + user.uid + '/' + userId2);
      const chat2 = firebase.database().ref('chats/' + userId2 + '/' + user.uid)


        chat1
         .once('value')
         .then(snap=>{
           if(snap.val() !== null){
             chat1.push({
>>>>>>> d6567f8fbb634f9530ae9441c4743857bf41a9d1
               photo:'putos',
               text:value,
               name:'bliss',
               date:Date.now()
             })
<<<<<<< HEAD
=======
           }else{
             chat2
             .once('value')
             .then(snap=>{

                chat2.push({
                   photo:'putos',
                   text:value,
                   name:'bliss',
                   date:Date.now()
                 })

             }); //then
>>>>>>> d6567f8fbb634f9530ae9441c4743857bf41a9d1
           }
         }); //then


<<<<<<< HEAD
        elChat = firebase.database().ref('chats/' + userId2 + '/' + user.id)
         .once('value')
         .then(snap=>{
           if(snap.val() === null){
            firebase.database().ref('chats/' + userId2 + '/' + user.uid).push({
               photo:'putos',
               text:value,
               name:'bliss',
               date:Date.now()
             })
           }
         }); //then
=======

>>>>>>> d6567f8fbb634f9530ae9441c4743857bf41a9d1

    }); //user


} //function




export default firebase;
