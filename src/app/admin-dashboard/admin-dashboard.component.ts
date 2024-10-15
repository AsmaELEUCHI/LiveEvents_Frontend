import { Component, OnInit } from '@angular/core';
import { ArtistDto } from '../interface/artist.interface';
import { ArtistService } from '../services/artist.service';
import { ResponseDto } from '../interface/response.interface';
import { response } from 'express';
import { error } from 'node:console';
import { SceneDto } from '../interface/scene.interface';
import { SceneService } from '../services/scene.service';
import { ProgramDto } from '../interface/program.interface';
import { ProgramService } from '../services/program.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  artistName: string = '';
  artistImage: string = '';
  artistBiography: string = '';
  futureFestivalName: string = '';
  futureDate: string = '';
  futureLocation: string = '';
  isEditing:boolean=false;
  artists : ArtistDto[]=[];

  sceneName : String='';
  scenes : SceneDto[]=[];

  selectedArtist: ArtistDto[]=[];
  selectedScene: SceneDto[]=[];
  date: Date| null = null;
  startTime: Date|null=null;
  endTime: Date|null=null;
  programs: ProgramDto[]=[];

  constructor(private artistService :ArtistService, private sceneService:SceneService, private programService: ProgramService){}

  //Initialisation des artistes dans la liste
  ngOnInit(): void {
      this.getArtist();
      this.getScenes();
  }

  //Fonction pour vérifier le format de la date
  isDateFormatValid(date: string): boolean{
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Format YYYY-MM-DD
    return datePattern.test(date);
  }

  //En Cliquant sur le bouton en envoie les données de l'artiste dans la base de donnée pour création de l'artiste
  onSubmitArtist(){
    if(this.isDateFormatValid(this.futureDate)){
      console.error('Le format de la date doit être YYYY-MM-DD');
    }
    const newArtist: ArtistDto = {
      artistName: this.artistName,
      artistImage: this.artistImage,
      artistBiography: this.artistBiography,
      futureFestivalName: this.futureFestivalName,
      futureDate: this.futureDate,
      futureLocation: this.futureLocation,
      isEditing:false, 
    };
    console.log(newArtist);
    
    this.artistService.createArtist(newArtist).subscribe({
      next:(response : ResponseDto)=>{
        console.log("la réponse est", response);
        
        this.getArtist();
      }, 
      error: (error) => {
        console.error('Erreur lors de la création de l\'artiste', error);
      }
    })
  };

  // Permet de récupérer tous les artistes et les afficher dans le tableau
  getArtist() : void{
    this.artistService.getAllArtists().subscribe({
      next:(response: ArtistDto[])=>{
    this.artists = response;
    },
      error: (error) => {
        console.error('Erreur lors de la récupération des artistes', error);
      } 
    })

  }

  //Activer le mode édition pour l'artiste sélectionné lors de modification
  editArtist(artist : ArtistDto){
    artist.isEditing=true;
  }

  //En cliquant sur le bouton les modification sont envoyées à la base de donnée
  saveChanges(artist: ArtistDto){
    if(artist.id!==undefined){
    this.artistService.updateArtist(artist.id, artist).subscribe({
      next:(response : ResponseDto)=>{
        this.getArtist();  
      },
      error: (error)=>{
        console.error('Erreur lors de la mise à jour de l\'artiste', error);
      }
    })
  }else{
    console.error('L\'ID de l\'artiste est indéfini');
    
  }
  }

  //Supprimer l'artiste sélectionné
  deleteArtist(artistId : number){
    console.log(artistId);
    
    this.artistService.deleteArtist(artistId).subscribe({
      next:(response : ResponseDto)=>{
        console.log(response);
        
        this.getArtist();  
      },
      error: (error)=>{
        console.error('Erreur lors de la suppression de l\'artiste', error);
      }
    })
  }



  onSubmitScene(){
    const newScene : SceneDto ={
      sceneName : this.sceneName,
      isEditing: false
    }

    this.sceneService.createScene(newScene).subscribe({
      next:(response: ResponseDto)=>{
        console.log("la réponse est", response);
        this.getScenes();
      },
      error: (error) => {
        console.error('Erreur lors de la création de la scéne', error);
      }
    })
  }


  getScenes(){
    this.sceneService.getAllScenes().subscribe({
      next:(response : SceneDto[])=>{
        this.scenes= response; 
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des scénes', error);
      }
    })
  }

  editScene(scene : SceneDto){
   scene.isEditing = true;
  }

  deleteScene(sceneId: number){

    this.sceneService.deleteScene(sceneId).subscribe({
      next:(response : ResponseDto)=>{
        console.log(response);
        
        this.getScenes();  
      },
      error: (error)=>{
        console.error('Erreur lors de la suppression de la scéne', error);
      }
    })
  }

  

  saveSceneChanges(scene : SceneDto){

    if(scene.id !==undefined){
    this.sceneService.updateScene(scene.id, scene).subscribe({
      next:(response : ResponseDto)=>{
        this.getScenes();  
      },
      error: (error)=>{
        console.error('Erreur lors de la mise à jour de la scéne', error);
      }
    })
  }else{
    console.error('L\'ID de la scene est indéfini');
    
  }
  }


  onsubmitProgram(){

    const newProgram : ProgramDto={
      artist:this.selectedArtist,
      scene:this.selectedScene,
      date:this.date,
      startTime:this.startTime,
      endTime:this.endTime,
      isEditing: false
    }

    this.programService.createProgram(newProgram).subscribe({
      next:(response: ResponseDto)=>{
        console.log("la réponse est", response);
        this.getPrograms();
      },
      error: (error) => {
        console.error('Erreur lors de la création du programme', error);
      }
    })

  }

  getPrograms(){
    this.programService.getAllPrograms().subscribe({
      next:(response : ProgramDto[])=>{
        this.programs= response; 
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des programmes', error);
      }
    })
  }

}


