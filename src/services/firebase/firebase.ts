// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { FirebaseApp } from 'firebase/app';
import * as auth from 'firebase/auth';
import { Auth, signInWithEmailAndPassword, UserCredential, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: class 형태로 app, auth를 멤버로 갖도록 수정할지 고민

const APP_NAME = 'Mwitter';

// Initialize Firebase
const init = (options: firebase.FirebaseOptions): FirebaseApp => {
  const app = firebase.initializeApp(options, APP_NAME);
  if (!app) {
    console.log('firebase init failed');
  }
  return app;
};

const getApp = (appName?: string): FirebaseApp => firebase.getApp(appName ?? APP_NAME);

const getAuth = (firebaseApp: FirebaseApp): Auth => {
  return auth.getAuth(firebaseApp);
};

export type { UserCredential };
export {
  init,
  getApp,
  getAuth,
  signInWithEmailAndPassword as logInWithEmail,
  createUserWithEmailAndPassword as createUserWithEmail,
};
