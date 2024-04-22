import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatiServizioService } from '../dati-servizio.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-liste-mostre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-mostre.component.html',
  styleUrl: './liste-mostre.component.css'
})
export class ListeMostreComponent {
    opere1 :any
    opere2: any
    id: any

  constructor(private DatiServizioService : DatiServizioService, private route: ActivatedRoute){
 
 
  }
 
 
  ngOnInit(){
    this.opere1 = this.DatiServizioService.getOpera1();
    this.opere2 = this.DatiServizioService.getOpera2();
    this.id = this.route.snapshot.paramMap.get('id');
 
  }
}
