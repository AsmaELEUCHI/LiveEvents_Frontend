export interface ArtistDto{
    id?:number;
    artistName:string; 
    artistImage:string;
    artistBiography:string;
    futureFestivalName?:string;
    futureDate?: string;
    futureLocation?: string;
    isEditing:boolean;
}