import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../../constants/api.constants';
import { Message } from '../interface/message.interface';
import { PartnerDto } from '../interface/partner.interface';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

    private partnerApiUrl = ApiConstants.API_URL + ApiConstants.PARTNERS_BASE_URL
    constructor (private http : HttpClient){}

    //Créer un partenaire
    createPartner(partnerDto : PartnerDto): Observable<Message>{
    return this.http.post<Message>(`${this.partnerApiUrl}`, partnerDto)
    }

    //Mettre à jour un partenaire
    updatePartner(id:number, partnerDto : PartnerDto) : Observable<Message>{
        return this.http.put<Message>(`${this.partnerApiUrl}/${id}` , partnerDto)
    }

    //Récupérer les partenaires
    getAllPartners() : Observable <PartnerDto[]>{
        return this.http.get<PartnerDto[]>(`${this.partnerApiUrl}`)
    }


    //Récupérer un partenaire par son Id
    getPartener(id : number) : Observable <PartnerDto>{
        return this.http.get<PartnerDto>(`${this.partnerApiUrl}/${id}`)
    }

    //Supprimer un partenaire par son Id
    deletePartner(id:number) : Observable<Message>{
        return this.http.delete<Message>(`${this.partnerApiUrl}/${id}`)
    }

}