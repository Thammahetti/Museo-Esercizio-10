import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Museo';
}
