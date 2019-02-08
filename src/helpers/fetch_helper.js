import { database } from 'config/firebase';

export function onFetch(path, cb) {
  database.ref(path).on('value', snapshot => {
    cb(snapshot.val());
  });
}

export async function getValue(path) {
  const ref = database.ref(path);
  const snapshot = await ref.once('value');
  return snapshot.val() ? snapshot.val() : null;
}
