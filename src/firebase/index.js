// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBkjT4vbEzsdlBodzMs9EObsvgGEj9HO8M',
    authDomain: 'jobsgo-80083.firebaseapp.com',
    projectId: 'jobsgo-80083',
    storageBucket: 'jobsgo-80083.appspot.com',
    messagingSenderId: '306051503088',
    appId: '1:306051503088:web:6fbe506354461c811ac335',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
