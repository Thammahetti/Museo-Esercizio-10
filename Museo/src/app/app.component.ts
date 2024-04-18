import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';
export const routes: Routes = [
  {path: 'Mostre', component: MostreComponent},

];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Museo';
}
