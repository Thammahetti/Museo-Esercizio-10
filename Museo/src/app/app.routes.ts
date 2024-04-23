import { Routes } from '@angular/router';
import { MostreComponent } from './mostre/mostre.component';
import { HomeComponent } from './home/home.component';
import { ListeMostreComponent } from './liste-mostre/liste-mostre.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Mostre', component: MostreComponent},
    {path: 'Home', component: HomeComponent},
    {path: 'ListeMostre/:id', component: ListeMostreComponent},
  
  ];
