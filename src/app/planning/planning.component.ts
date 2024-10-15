import { Component, OnInit } from '@angular/core';
import { ArtistesService } from '../services/artistes.service';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.css'
})
export class PlanningComponent implements OnInit{
  artistesData: any[] = [];
  scenes : any[]=[];
  selectedArtist: any;
  modalVisible: boolean = false;

  ngOnInit(): void {
    this.loadArtistes()
}
constructor(private artistesService: ArtistesService, private router:Router){}

loadArtistes(): void{
  this.artistesService.getArtistes().subscribe({
    next:(data)=>{
      this.artistesData=data;
      this.fillPlanningWithData();
      console.log("succés");
    },
    error:(error)=>{
      console.error('Problème lors du chargement des artistes :', error);
    }
  })    
}

private fillPlanningWithData(): void {
  const scenesObj : any ={};
  this.artistesData.forEach((artiste)=>{
    const artisteName = artiste.acf.nom;
    const scene = artiste.acf.scene;
    const date= artiste.acf.date;
    const horaire=artiste.acf.horaire;
    const imageUrl=this.getArtistImageUrl(artiste.id);
    const biographie = artiste.acf.biographie;

    if(!scenesObj[scene]){
      scenesObj[scene]={
        name: scene,
        dates:[
          {date:"26/12/2024", artistes:[]},
          { date: "27/12/2024", artistes: [] },
          { date: "28/12/2024", artistes: [] },
        ]
      }
    }
    const dayArtiste= scenesObj[scene].dates.find((d:any)=>d.date===date);
    if(dayArtiste){
      dayArtiste.artistes.push({
        artisteName,
        horaire,
        imageUrl,
        biographie,
        scene
      });
    }
  });

  this.scenes = Object.values(scenesObj); //transformer l'objet en tableau


}

showArtistDetails(artiste: any): void {
  this.selectedArtist = artiste;
  this.modalVisible = true;
}

closeModal(): void {
  this.modalVisible = false;
}




 private getArtistImageUrl(artistId: number): string {
    return `assets/images/${artistId}_optimized_.png`;
  }



}
