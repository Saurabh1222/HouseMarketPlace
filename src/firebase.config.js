import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTdBH5-GXrZHUeKUhCXHHIcxZiqYgZ4DQ",
  authDomain: "house-marketplace-app-6336a.firebaseapp.com",
  projectId: "house-marketplace-app-6336a",
  storageBucket: "house-marketplace-app-6336a.appspot.com",
  messagingSenderId: "116772676883",
  appId: "1:116772676883:web:511fc2a1594824ad6326e6"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
