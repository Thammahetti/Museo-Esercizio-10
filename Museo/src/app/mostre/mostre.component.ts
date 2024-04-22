import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {
  mostre = [
    {nome:"Vincent van Gogh" , artisti: "Vincent van Gogh", img: "../../assets/van.png", descrizione: " Esplora i capolavori iconici  in questa mostra immersiva. Scopri la vita travagliata di Van Gogh e le sue tecniche pittoriche. Un'esperienza imperdibile per gli amanti dell'arte", dataInizio:  new Date(2024,12,2) , dataArrivo: new Date(2024,12,12)},
    {nome:"Mostra di Martin Parr" , artisti: "Martin Parr", img: "../../assets/parr.png", descrizione: "La mostra Martin Parr , frutto della rinnovata collaborazione con Magnum Photos, celebra il lavoro del fotoreporter britannico che ha saputo indagare la società nei suoi aspetti più controversi con un tocco di ironia e vivacità.", dataInizio:  new Date(2024,6,2) , dataArrivo: new Date(2024,12,12)},
    {nome:"La grande mostra su Picasso" , artisti: "Pablo Picasso", img: "../../assets/picasso.png", descrizione: "La mostra Picasso, lo straniero a Milano è un'occasione unica per scoprire opere inedite dell'artista spagnolo e per conoscere il lato più personale e intimo di uno dei più grandi artisti del Novecento.", dataInizio:  new Date(2025,4,2) , dataArrivo: new Date(2025,4,31)},
    {nome:"Mostra di Munch" , artisti: "Edvard Munch", img: "../../assets/munch.png", descrizione: "La mostra di Edvard Munch  offre l'imperdibile occasione di approfondire la conoscenza di uno dei più importanti interpreti della pittura europea a cavallo tra XIX e XX secolo, che ha saputo rielaborare gli stimoli della pittura del proprio tempo dando vita a un'arte personalissima ma al contempo in grado di rappresentare le angosce e le paure del genere umano.", dataInizio:  new Date(2025,3,2) , dataArrivo: new Date(2025,3,10)},
    {nome:"Mostre di Ugo Mulas" , artisti: "Ugo Mulas", img: "../../assets/ugo.png", descrizione: "La mostra di Ugo Mulas  rappresenta la prima ampia retrospettiva che la città dedica al grande fotografo internazionale del secondo dopoguerra. Un omaggio ad un acuto osservatore della realtà che ha saputo restituire attraverso il mezzo fotografico una testimonianza critica della società.", dataInizio:  new Date(2024,7,2) , dataArrivo: new Date(2024,12,11)},
    {nome:"Mostre di Tim Burton" , artisti: "Tim Burton", img: "../../assets/tim.png", descrizione: "La mostra dedicata a Tim Burton è un'esperienza immersiva e divertente negli ambienti abitati da personaggi cari al pubblico, che sono entrati a far parte di un immaginario collettivo come Edward Mani di Forbice, Beetlejuice, Jack Skeletron di Nightmare Before Christmas, La sposa cadavere, Willi Wonka, Sweeney Todd, Batman e molti altri.", dataInizio:  new Date(2026,2,2) , dataArrivo: new Date(2027,12,12)},
    {nome:"Mostra di Giuseppe De Nittis" , artisti: "Giuseppe De Nittis", img: "../../assets/nittis.png", descrizione: "La mostra di de Nittis sarà dunque un'occasione per entrare nel mondo allegro, luminoso e spensierato di uno dei più grandi interpreti della pittura italiana, cogliendone le relazioni, le peculiarità e l'eccezionalità che lo hanno reso famoso in tutto il mondo.", dataInizio:  new Date(2025,4,2) , dataArrivo: new Date(2026,11,12)},
    
  ]
}
