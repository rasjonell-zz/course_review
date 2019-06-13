import { database } from 'config/firebase';

export function onFetch(path, cb) {
  database.ref(path).on('value', snapshot => {
    cb(snapshot.val());
  });
}

export async function getValue(path) {
  const ref = database.ref(path);
  return await getSnapValue(ref);
}

export function asArray(path, cb) {
  database.ref(path).on('value', snapshot => {
    const obj = snapshot.val();
    const result = Object.keys(obj).map(key => ({ ...obj[key], key }));
    cb(result);
  });
}

async function getSnapValue(ref) {
  const snapshot = await ref.once('value');
  return snapshot.val() && snapshot.val();
}
