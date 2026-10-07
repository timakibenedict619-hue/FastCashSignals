// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import {
  getStorage
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd-DCUCIoWGI-zA9AbQfGKNfuZNRCf_0A",
  authDomain: "fastcashsignals-1f30f.firebaseapp.com",
  projectId: "fastcashsignals-1f30f",
  storageBucket: "fastcashsignals-1f30f.firebasestorage.app",
  messagingSenderId: "120931439285",
  appId: "1:120931439285:web:7b1dfa391474dd03ad24fc",
  measurementId: "G-WVLLXP2219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(app);

// Firestore Database
const db = getFirestore(app);

// Firebase Storage
const storage = getStorage(app);

// Firebase Analytics
const analytics = getAnalytics(app);

// Export everything we'll use throughout the project
export {
  app,
  auth,
  db,
  storage,
  analytics
};
