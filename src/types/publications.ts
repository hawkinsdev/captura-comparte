export type PublicationForUserCollection = {
    id: number;
    activate: boolean;
    description: string;
    id_user:string;
    url_photo: string;
}

export type Publications = Array<PublicationForUserCollection> | [];