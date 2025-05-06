import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Reuse your existing config
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

document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("login-message");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("Login successful:", user);

        // Redirect after login
        window.location.href = "index.html";
    } catch (error) {
        console.error("Login error:", error);
        message.textContent = error.message;
    }
});
