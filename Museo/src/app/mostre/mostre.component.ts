import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { DatiServizioService } from '../dati-servizio.service';
@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {
  mostre : any
  constructor(private DatiServizioService : DatiServizioService){
 
 
  }
  ngOnInit(){
    this.mostre = this.DatiServizioService.getMostre();
    
 
  }

}
