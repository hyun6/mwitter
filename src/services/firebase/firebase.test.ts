import { firebaseService } from '..';
import dotenv from 'dotenv';
import path from 'path';
import { FirebaseError } from '@firebase/util';
dotenv.config({
  path: path.join(__dirname, '../../../config/.env'),
});

const makeRandomString = (length: number) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toLowerCase();
};

beforeAll(() => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID,
  };
  return firebaseService.init(firebaseConfig);
});

test('get app', () => {
  const app = firebaseService.getApp();
  expect(app).toBeDefined();
});

test('get auth', () => {
  const app = firebaseService.getApp();
  const auth = firebaseService.getAuth(app);
  expect(auth).toBeDefined();
});

describe('create user by email', () => {
  test('success', async () => {
    const app = firebaseService.getApp();
    const auth = firebaseService.getAuth(app);
    const TEST_MAIL = `${makeRandomString(10)}@gmail.com`;
    const TEST_PWD = `${makeRandomString(15)}`;
    try {
      const userCredential = await firebaseService.createUserWithEmail(auth, TEST_MAIL, TEST_PWD);
      expect(userCredential.user.email).toEqual(TEST_MAIL);
    } catch (e) {}
  });

  test('duplicated email', async () => {
    const app = firebaseService.getApp();
    const auth = firebaseService.getAuth(app);
    const TEST_MAIL = 'psymhs@gmail.com';
    const TEST_PWD = 'asjkutnb!1468';
    try {
      await firebaseService.createUserWithEmail(auth, TEST_MAIL, TEST_PWD);
    } catch (e: unknown) {
      expect((e as FirebaseError).name).toEqual(FirebaseError.name);
    }
  });
});
