import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {//sirve como pivote de información
  hermanoGrande:string = '';
  hermanoPequeno:string = '';

  getHermanoGrande(){
    return this.hermanoGrande;
  }

  setHermanoGrande(hermano:string){
    this.hermanoGrande = hermano;
  }

  getHermanoPequeno(){
    return this.hermanoPequeno;
  }

  setHermanoPequeno(hermano:string){
    this.hermanoPequeno = hermano;
  }


  saludar(hermano:string){
    console.log('Hola '+hermano);
  }

  preguntarPorHijo():string{
    return '¿Como esta tu hijo?';
  }

  constructor() { }
}
