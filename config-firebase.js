  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-storage.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD9NxEGHB6RJ-8F8oWG9iyBqUVGL4VEERI",
    authDomain: "ingles-xammar.firebaseapp.com",
    projectId: "ingles-xammar",
    storageBucket: "ingles-xammar.firebasestorage.app",
    messagingSenderId: "243819951892",
    appId: "1:243819951892:web:f91571c66c833fb3e63401",
    measurementId: "G-68S95ERCGK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);
  export { app, db, storage, auth };
