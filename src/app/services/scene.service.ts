import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../../constants/api.constants';
import { Message } from '../interface/message.interface';
import { SceneDto } from '../interface/scene.interface';

@Injectable({
  providedIn: 'root'
})
export class SceneService {


    private sceneApiUrl=ApiConstants.API_URL + ApiConstants.SCENES_BASE_URL
    constructor(private http : HttpClient){}

    //créer une scéne
    createScene(sceneDto : SceneDto) : Observable<Message>{
        return this.http.post<Message>(`${this.sceneApiUrl}`, sceneDto);
    }

    //Mettre à jour une scéne
    updateScene(id:number, sceneDto : SceneDto): Observable<Message>{
        return this.http.put<Message>(`${this.sceneApiUrl}/${id}`, sceneDto);
    }

    //Récupérer tous les scénes
    getAllScenes () : Observable<SceneDto[]>{
        return this.http.get<SceneDto[]>(`${this.sceneApiUrl}`);
    }

    //Récupérer une scéne par son Id
    getScene(id : number) : Observable <SceneDto>{
        return this.http.get<SceneDto>(`${this.sceneApiUrl}/${id}`)
    }

    //Supprimer une scéne par son Id
    deleteScene(id:number) : Observable<Message>{
        return this.http.delete<Message>(`${this.sceneApiUrl}/${id}`)
    }



}