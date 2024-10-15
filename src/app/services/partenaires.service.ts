import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Partner } from '../../interfaces/partenaire.interface';

@Injectable({
    providedIn: 'root'
})

export class PartnerService{
    private jsonUrl = 'assets/partenaires.json'
    constructor(private http: HttpClient){}

    getPartners(): Observable<Partner[]>{
        return this.http.get<Partner[]>(this.jsonUrl);
    }   
}



