// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoX9iCM4_TLnm9yHVSiOD1n4pKuLH-48s",
    authDomain: "echowrite-30e96.firebaseapp.com",
    projectId: "echowrite-30e96",
    storageBucket: "echowrite-30e96.appspot.com", // Fixed typo
    messagingSenderId: "282519414477",
    appId: "1:282519414477:web:ef7133661398e9f44b2b84",
    measurementId: "G-TZ2J0Z9Z9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Ensure user is logged in before showing `welcome.html`
onAuthStateChanged(auth, (user) => {
    if (!user) {
        console.log("No user signed in. Redirecting to login page...");
        window.location.href = "log.html"; // Redirect to login page if not authenticated
    } else {
        console.log("User signed in:", user.email);
        // You can add code here to display user-specific content if needed
    }
});
