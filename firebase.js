// Import Firebase modules from the CDN
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
const db = getFirestore(app);

// Handle Sign-Up
document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const userType = document.getElementById("user-type").value;
    const message = document.getElementById("signup-message");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional user details in Firestore
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            email: email,
            userType: userType
        });

        message.textContent = "Sign-up successful! Redirecting...";
        
        // Redirect immediately after sign-up
        window.location.href = "welcome.html";

    } catch (error) {
        message.textContent = error.message;
    }
});*/


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAoX9iCM4_TLnm9yHVSiOD1n4pKuLH-48s",
    authDomain: "echowrite-30e96.firebaseapp.com",
    projectId: "echowrite-30e96",
    storageBucket: "echowrite-30e96.firebasestorage.app",
    messagingSenderId: "282519414477",
    appId: "1:282519414477:web:ef7133661398e9f44b2b84",
    measurementId: "G-TZ2J0Z9Z9E"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("signup-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const userType = document.getElementById("user-type").value;
    const message = document.getElementById("signup-message");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    try {
        console.log("Attempting to create user...");
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("User created successfully:", user);

        
        // Redirect immediately after sign-up
        window.location.href = "index.html";

        
    } catch (error) {
        console.error("Error during sign-up:", error); // Log full error details
        message.textContent = error.message;
    }
});
