import { database } from 'config/firebase';

export function onFetch(path, cb) {
  database.ref(path).on('value', snapshot => {
    cb(snapshot.val());
  });
}
