import { database } from 'config/firebase';

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

export const getUsers = async () =>
  await database
    .ref('users')
    .once('value')
    .val();
