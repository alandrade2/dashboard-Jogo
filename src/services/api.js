import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwBZ-gxlwaES9QYtQ47fgxX8O6bJPjZkM",
  authDomain: "cervelandia-684b8.firebaseapp.com",
  databaseURL: "https://cervelandia-684b8-default-rtdb.firebaseio.com",
  projectId: "cervelandia-684b8",
  storageBucket: "cervelandia-684b8.appspot.com",
  messagingSenderId: "46183496325",
  appId: "1:46183496325:web:55f9dc23d554266a6247ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;