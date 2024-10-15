import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Papa from 'papaparse'; 

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})
export class CarteComponent implements OnInit {
  private map!: google.maps.Map; 
  private markers: google.maps.Marker[] = []; 

  constructor() {}

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap(): void {
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 48.8912, lng: 2.3307 }, // Paris
      zoom: 12,
    });

    // Charger le fichier CSV et le convertir en JSON
    fetch('../markers.csv')
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          delimiter: ";",
          complete: (results) => {
            const jsonData = results.data;
            jsonData.forEach(data => {
              this.createMarker(data);
            });
          },
        });
      })
      .catch(error => console.error("Erreur lors du chargement des marqueurs:", error));
  }

  createMarker(data: any): void {
    const lat = parseFloat(data.coord_x);
    const lng = parseFloat(data.coord_y);

    if (!isNaN(lat) && !isNaN(lng)) {
      const color = this.getMarkerColor(data.id);
      const marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: this.map,
        title: data.title,
        icon: {
          url: `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
        }
      });

      this.markers.push(marker);

      const infowindow = new google.maps.InfoWindow({
        content: `<div><strong>${data.title}</strong><br>${data.address}</div>`,
      });

      marker.addListener("click", () => {
        infowindow.open(this.map, marker);
      });
    } else {
      console.error("Coordonnées invalides pour le marqueur:", data);
    }
  }

  getMarkerColor(id: string): string {
    switch (id) {
      case "1":
      case "2":
      case "4":
        return "red";
      case "5":
      case "6":
      case "7":
        return "purple";
      case "8":
        return "yellow";
      default:
        return "blue"; // Couleur par défaut
    }
  }
}