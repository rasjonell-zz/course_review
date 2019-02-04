import { auth, provider } from 'config/firebase';

export const signIn = async () => {
  auth.signInWithRedirect(provider);
  const result = await auth.getRedirectResult();
  return result.user;
};

export const signOut = async () => await auth.signOut();
