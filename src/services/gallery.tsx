import { getData } from "../lib/helper/firebaseRepository"
import { Publications } from "../types/publications"

export const get_all_photos = async (): Promise<Publications> => {
    const publications = await getData('publications_for_user', 'publications')
    const photos = Array.isArray(publications) ? publications : [publications];
    return photos;
}