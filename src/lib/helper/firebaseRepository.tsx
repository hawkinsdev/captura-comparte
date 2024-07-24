import { doc, addDoc, collection,updateDoc, getDoc, deleteDoc, DocumentData} from "firebase/firestore";
import { db } from "./firebase";

export const getData = async (collectionName: string, docId: string): Promise<DocumentData | []> => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return [];
    }
  } catch (e) {
    console.error("Error obteniendo documento: ", e);
    return [];
  }
};


export const saveData = async (collectionName: string, data: any) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Documento escrito con ID: ", docRef.id);
  } catch (e) {
    console.error("Error añadiendo documento: ", e);
  }
};

export const updateData = async (collectionName: string, docId: string, data: any) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
    console.log("Documento actualizado con éxito");
  } catch (e) {
    console.error("Error actualizando documento: ", e);
  }
};


export const deleteData = async (collectionName: string, docId: string) => {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    console.log("Documento eliminado con éxito");
  } catch (e) {
    console.error("Error eliminando documento: ", e);
  }
};

