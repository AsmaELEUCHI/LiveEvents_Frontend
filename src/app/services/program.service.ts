import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../../constants/api.constants';
import { Message } from '../interface/message.interface';
import { ProgramDto } from '../interface/program.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

    private programApiUrl = ApiConstants.API_URL + ApiConstants.PROGRAMS_BASE_URL
    constructor (private http : HttpClient){}

    //Créer un programme
    createProgram(programDto : ProgramDto): Observable<Message>{
    return this.http.post<Message>(`${this.programApiUrl}`, programDto)
    }

    //Mettre à jour un programme
    updateProgram(id:number, programDto : ProgramDto) : Observable<Message>{
        return this.http.put<Message>(`${this.programApiUrl}/${id}` , programDto)
    }

    //Récupérer les programmes
    getAllPrograms() : Observable <ProgramDto[]>{
        return this.http.get<ProgramDto[]>(`${this.programApiUrl}`)
    }


    //Récupérer un programme par son Id
    getProgram(id : number) : Observable <ProgramDto>{
        return this.http.get<ProgramDto>(`${this.programApiUrl}/${id}`)
    }

    //Supprimer un programme par son Id
    deleteProgram(id:number) : Observable<Message>{
        return this.http.delete<Message>(`${this.programApiUrl}/${id}`)
    }

}