import { database } from 'config/firebase';
import { getValue } from 'helpers/fetch_helper';

export const isValid = user => user.feedbacks && Object.keys(user.feedbacks).length >= 2;

export const createUser = async user => {
  if (!user) return;

  const userRef = database.ref(`users/${user.uid}`);
  const snapshot = await userRef.once('value');

  const { uid, displayName, photoURL, email } = user;

  if (!snapshot.val()) {
    userRef.set({
      uid,
      displayName,
      photoURL,
      email
    });
  }

  return user;
};

export const updateUser = async user => {
  if (!user) return;
  const userRef = database.ref(`users/${user.uid}`);
  await userRef.update(user);
  return user;
};

export const getUsers = async () => getValue('users');

export const getUser = async uid => getValue(`users/${uid}`);
