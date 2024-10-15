import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../../constants/api.constants';
import { ArtistDto } from '../interface/artist.interface';
import { ResponseDto } from '../interface/response.interface';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArtistService {

    private artistApiUrl=ApiConstants.API_URL + ApiConstants.ARTIST_BASE_URL
    constructor(private http : HttpClient){}

    //créer un artiste
    createArtist(artistDto : ArtistDto) : Observable<ResponseDto>{
        
        return this.http.post<ResponseDto>(`${this.artistApiUrl}`, artistDto);
        
        
    }

    //Mettre à jour un artiste
    updateArtist(id:number, artistDto:ArtistDto): Observable<ResponseDto>{
        return this.http.put<ResponseDto>(`${this.artistApiUrl}/${id}`, artistDto);
    }

    //Récupérer tous les artistes
    getAllArtists () : Observable<ArtistDto[]>{
        return this.http.get<ArtistDto[]>(`${this.artistApiUrl}`);
    }

    //Récupérer un artiste par son Id
    getArtist(id : number) : Observable <ArtistDto>{
        return this.http.get<ArtistDto>(`${this.artistApiUrl}/${id}`)
    }

    //Supprimer un artiste par son Id
    deleteArtist(id:number) : Observable<ResponseDto>{
        return this.http.delete<ResponseDto>(`${this.artistApiUrl}/${id}`)
    }

}