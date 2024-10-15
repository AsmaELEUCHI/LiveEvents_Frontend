import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../services/partenaires.service';
import { log } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrl: './partenaires.component.css'
})
export class PartenairesComponent implements OnInit {
  partnerData: any[] = [];

  ngOnInit(): void {
    this.loadPartnetrs()
}
constructor(private partnerService: PartnerService, private router:Router){}


loadPartnetrs(){

  this.partnerService.getPartners().subscribe({
    next:(data)=>{
      this.partnerData=data;
      console.log(this.partnerData);
    },
    error: (error)=>{
      console.error('Problème lors du chargement des partenaires :', error);
    }
  })
}

getPartnerImageUrl(partnerId:number): string{
  return `assets/images/${partnerId}_optimized_.png`;
}

}




