// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfFMSlPiMAR8nLw9hPDUqTL9chnsA-m_E',
  authDomain: 'social-media-react-redux.firebaseapp.com',
  projectId: 'social-media-react-redux',
  storageBucket: 'social-media-react-redux.appspot.com',
  messagingSenderId: '921891143892',
  appId: '1:921891143892:web:cd66a78bb98f41e8353b41',
  measurementId: 'G-ZLCRXRYY3K',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
