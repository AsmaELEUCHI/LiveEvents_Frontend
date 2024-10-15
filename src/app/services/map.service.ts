import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../../constants/api.constants';
import { Message } from '../interface/message.interface';
import { MapDto } from '../interface/map.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {

    private mapApiUrl = ApiConstants.API_URL + ApiConstants.MAP_BASE_URL
    constructor (private http : HttpClient){}

    //Créer une carte
    createMap(mapDto : MapDto): Observable<Message>{
    return this.http.post<Message>(`${this.mapApiUrl}`, mapDto)
    }

    //Mettre à jour une carte
    updateMap(mapDto : MapDto) : Observable<Message>{
        return this.http.put<Message>(`${this.mapApiUrl}` , mapDto)
    }

    //Récupérer la carte
    getMap() : Observable <MapDto[]>{
        return this.http.get<MapDto[]>(`${this.mapApiUrl}`)
    }

 
    //Supprimer la carte
    deleteMap() : Observable<Message>{
        return this.http.delete<Message>(`${this.mapApiUrl}`)
    }

}