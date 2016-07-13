// TODO: Paste the Firebase initialization code first

  // Initialize Firebase
  // removed the firebase initialisation script
  var config = {
    apiKey: "AIzaSyC24_yyeBozILcR6iruKVkegLfvffE15yU",
    authDomain: "rohancreasey-firebase-workshop.firebaseapp.com",
    databaseURL: "https://rohancreasey-firebase-workshop.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);

    
// TODO: Your code below
/*
1. push, creates new values to referenced key
2. set, creates/overwrites new key (with values) or key path
3. on, listens for any changes to key paths & values
4. once, listens for a change once, e.g. startup enter name
5. update, writes new value(s) to key (or path)
6. remove, deletes key/path or values
    6a. could also .set values to null

*/

// firebase.database().ref('tasks/').push({ //push new entry with values
//   title: 'Learn CRUD',
//   done: true
// });

// firebase.database().ref('test/').push({
//     title: 'testValue',
//     done: true
// });

// firebase.database().ref('tasks/').set({
//   abc123: {
//     title: 'Overwrite data',
//     done: true
//   }
// });

// // set new data in key tasks/<newItem>
// firebase.database().ref('tasks/xyz890/').set({
//   title: 'Set new data',
//   done: true
// });

// // listening for changes to key = tasks/
// // on(callback, function) function updates anything to referenced path
// // on listens for every change
// firebase.database().ref('tasks/').on('value', function(snapshot) {
//   console.log(snapshot.val());
// });
// // once is another option for a one off, e.g. chosen avatar at beginning

// // update a value, at the key referenced in path
// firebase.database().ref('tasks/xyz890').update({
//   title: 'This value is updated via .update function'
// });

// firebase.database().ref('tasks/xyz890').remove();
// firebase.database().ref('test/-KMYW0Bv6HiVyN_1h2XD').remove();


// add click event to button
// when clicked, get text inside 'new-item' box
// push item to database 
// re-render page
// pull new database info
// render list inside 'todo-list'

var button = document.querySelector('button') // locate button

// add event listener
// then once this exists, make it find the newItem
button.addEventListener("click", function() {
     console.log('button pressed');
     var newItem = document.querySelector('#new-item'); // moved from being declared at top
     console.log(newItem.value);    //get value property of variable
 });







// function getItem() {

// firebase.database().ref('list/').push({ 
//    title: newItem,
//    done: false
//  });

// }



// var newItem = document.getElementById("new-item").innerHTML;
// console.log(newItem);

// document.getElementById("button").addEventListener("click", addItem);

// // function addItem(a, b) {
// //     document.querySelector(todo-list).innerHTML = `
// //         <li>${newItem}</li>
// //     `
// // }

// //  function() {
//     var newItem = document.getElementById("new-item").innerHTML;
// //	}

// var addItem = document.getElementById("button").addEventListener("click", function(){
//     newItem.innerHTML = "Hello World";
// });

// button.addEventListener("click", function() { alert("alert");});
