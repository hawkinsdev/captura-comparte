import { storage } from "../lib/helper/firebase";
import { toast } from "react-toastify"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadPhoto = async (dataUrl: string) => {
  try {
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const storageRef = ref(storage, `photos/${Date.now()}.png`);
    await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(storageRef);
    toast.success('Se ha subido la foto correctamente 😀');
    return downloadURL;
  } catch (error) {
    console.error("Failed to upload photo", error);
    toast.error('Ha ocurrido un error al subir la foto 😞');
    return null;
  }
};
