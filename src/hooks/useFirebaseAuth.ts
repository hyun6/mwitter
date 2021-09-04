import { UserCredential } from '@firebase/auth';
import { useState } from 'react';
import { firebaseService } from '../services';

type authFunc = (email: string, password: string) => void;

export const useFirebaseAuth = (): [UserCredential | null, authFunc, authFunc] => {
  const [user, setUser] = useState<UserCredential | null>(null);

  const handleSignin = async (email: string, password: string) => {
    const app = firebaseService.getApp();
    const auth = firebaseService.getAuth(app);
    const createdUser = await firebaseService.createUserWithEmail(auth, email, password);
    if (createdUser) {
      setUser(createdUser);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    const app = firebaseService.getApp();
    const auth = firebaseService.getAuth(app);
    const loggedInUser = await firebaseService.logInWithEmail(auth, email, password);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  };

  return [user, handleSignin, handleLogin];
};
