import {
  signInWithPopup,
  signOut,
  UserCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  AuthError,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../lib/helper/firebase";

export const checkIfUserExists = async (email: string): Promise<boolean> => {
  try {
    const user = auth.currentUser;
    return user?.email === email;
  } catch (error) {
    const authError = error as AuthError;
    console.error("Error checking user existence:", authError.message);
    return false;
  }
};

export const register = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw error;
  }
};

export const login = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await register(email, password);
    return userCredential;
  } catch (error) {
    const authError = error as AuthError;

    if (authError.code === 'auth/email-already-in-use') {

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return userCredential;
      } catch (signInError) {
        console.error("Error al iniciar sesión:", signInError);
      }
    } else {
      console.error("Error al registrar el usuario:", authError.message);
    }
  }
};

export const signInWithGoogle = async (): Promise<UserCredential> => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error("Google Login Error:", error);
    throw error;
  }
};

export const signInWithgGithub = async (): Promise<UserCredential> => {
  try {
    return await signInWithPopup(auth, githubProvider);
  } catch (error) {
    console.error("Gitub Login Error:", error);
    throw error;
  }
};

export const logOut = async (): Promise<void> => {
  try {
    sessionStorage.clear();
    localStorage.clear();
    return await signOut(auth);
  } catch (error) {
    console.error("SignOut Error:", error);
    throw error;
  }
};
