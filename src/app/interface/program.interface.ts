import { ArtistDto } from "./artist.interface";
import { SceneDto } from "./scene.interface";

export interface ProgramDto {
    id?: number;
    artist: ArtistDto[];  
    scene: SceneDto[];    
    date: Date | null; 
    startTime: Date | null;
    endTime: Date | null; 
    isEditing:boolean
}
