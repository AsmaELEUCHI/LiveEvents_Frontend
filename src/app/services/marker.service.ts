import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../../constants/api.constants';
import { MarkerDto } from '../interface/marker.interface';
import { Message } from '../interface/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

    private markerApiUrl=ApiConstants.API_URL + ApiConstants.MARKER_BASE_URL
    constructor(private http : HttpClient){}

    //créer un marqueur
    createMarker(markerDto : MarkerDto) : Observable<Message>{
        return this.http.post<Message>(`${this.markerApiUrl}`, markerDto );
    }

    //Mettre à jour un marqueur
    updateMarker(id:number, markerDto : MarkerDto): Observable<Message>{
        return this.http.put<Message>(`${this.markerApiUrl}/${id}`, markerDto );
    }

    //Récupérer tous les marqueurs
    getAllMarkers () : Observable<MarkerDto[]>{
        return this.http.get<MarkerDto[]>(`${this.markerApiUrl}`);
    }

    //Récupérer un marqueur par son Id
    getMarker(id : number) : Observable <MarkerDto>{
        return this.http.get<MarkerDto>(`${this.markerApiUrl}/${id}`)
    }

    //Supprimer un marqueur par son Id
    deleteMarker(id:number) : Observable<Message>{
        return this.http.delete<Message>(`${this.markerApiUrl}/${id}`)
    }



}