import { openDB, DBSchema } from 'idb';

interface MyDB extends DBSchema {
  users: {
    key: string;
    value: {
      email: string;
      username: string;
      password: string;
    };
  };
}

const dbPromise = openDB<MyDB>('user-store', 1, {
  upgrade(db) {
    db.createObjectStore('users', { keyPath: 'email' });
  },
});

export const setItem = async (user: { email: string; username: string; password: string }) => {
  const db = await dbPromise;
  return db.put('users', user);
};

export const getAllItems = async () => {
  const db = await dbPromise;
  return db.getAll('users');
};
