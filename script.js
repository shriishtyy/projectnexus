// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-aut.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOyByNZVKQXLFc0rJ6KcksaRGWwY-WgwQ",
  authDomain: "signup-page-47cfe.firebaseapp.com",
  databaseURL: "https://signup-page-47cfe-default-rtdb.firebaseio.com",
  projectId: "signup-page-47cfe",
  storageBucket: "signup-page-47cfe.appspot.com",
  messagingSenderId: "505265430763",
  appId: "1:505265430763:web:a4fd944a1466c6b28f9eae",
  measurementId: "G-4TTKNKES0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            
            set(ref(database, 'users'/ +user.uid),{
                username: username,
                email:email
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            errorMessage.textContent = errorMsg;
            alert(errorMessage);
        });
    });
    
login.addEventListener('click',(e)=>{
    const username = document.getElementById('user').value;
    const email = document.getElementById('email').value;

    signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;

const dt = new Date();
update(ref(database, 'users'/ +user.uid),{
    last_login: dt,
    
})
alert('User loged in!')
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
});

});
const user = auth.currentUser;
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
logout.addEventListener('click',(e)=>{
    


signOut(auth).then(() => {
// Sign-out successful.
alret('user loged out');
}).catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
alert(errorMessage);
// An error happened.
});
})