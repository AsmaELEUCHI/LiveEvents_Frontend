import { Component, OnInit } from '@angular/core';
import { ArtistesService } from '../services/artistes.service';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrl: './programmes.component.css'
})
export class ProgrammesComponent implements OnInit{
  artistesData: any[] = [];
  filteredArtistes: any[] = [];
  selectedArtist: any;
  selectedArtistImage: string = '';
  selectedDate: string = 'tout';
  selectedScene: string = 'tout';
  modalVisible: boolean = false;

  ngOnInit(): void {
      this.loadArtistes()
  }
  constructor(private artistesService: ArtistesService, private router:Router){}

  loadArtistes(): void{
    this.artistesService.getArtistes().subscribe({
      next:(data)=>{
        this.artistesData=data;
        this.filteredArtistes=data;
        console.log("succés");
      },
      error:(error)=>{
        console.error('Problème lors du chargement des artistes :', error);
      }
    })    
  }

  getArtistImageUrl(artistId:number): string{
    return `assets/images/${artistId}_optimized_.png`;
  }

  filterArtistByDate(date:string): void{
    this.selectedDate= date;
    this.applyFilters();
  }

  filtrerArtisteByScene(scene:string):void{
    this.selectedScene=scene;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredArtistes = this.artistesData.filter(artiste =>
      (this.selectedDate === 'tout' || artiste.acf.date === this.selectedDate) &&
      (this.selectedScene === 'tout' || artiste.acf.scene === this.selectedScene)
    );
  }

  showArtistDetails(artisteId:number): void{
    this.selectedArtist=this.artistesData.find(artiste=>artiste.id===artisteId);
    this.selectedArtistImage = this.getArtistImageUrl(artisteId);
    console.log(this.selectedArtist);
    this.modalVisible = true;
  }
  closeModal(): void {
    this.modalVisible = false;
  }

  voirPlanning(): void {
    this.router.navigate(['/planning']);
  }

}
