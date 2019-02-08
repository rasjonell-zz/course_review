import has from 'lodash/has';
import { database } from 'config/firebase';
import { getValue } from 'helpers/fetch_helper';

export const isValid = user => has(user, ['major', 'year', 'best_course', 'worst_course']);

export const saveUser = async user => {
  if (!user) return;

  const { uid, displayName, photoURL, email } = user;
  const userRef = database.ref(`users/${uid}`);
  const snapshot = await userRef.once('value');

  if (!snapshot.val()) {
    userRef.set({ uid, displayName, photoURL, email });
  }

  return user;
};

export const getUsers = async () => getValue('users');

export const getUser = async uid => getValue(`users/${uid}`);
