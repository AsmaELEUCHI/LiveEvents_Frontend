import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Artiste } from '../../interfaces/artiste.interface';

@Injectable({
    providedIn: 'root'
})

export class ArtistesService{
    private jsonUrl = 'assets/artistes.json'

    constructor(private http: HttpClient){}

    getArtistes(): Observable<Artiste[]>{
        return this.http.get<Artiste[]>(this.jsonUrl);
    }

}

