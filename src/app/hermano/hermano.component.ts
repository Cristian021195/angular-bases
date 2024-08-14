import { Component, inject, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  standalone: true,
  imports: [],
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css'
})
export class HermanoComponent implements OnInit{
  nombre:string = '';
  constructor(//por nomenclatura, los servicios van con guion bajo _
    private _servicioFamiliar: ServicioFamiliarService
  ){}

  private _servicioFamiliarInj = inject(ServicioFamiliarService);//metodo alternativo para la inyeccion, para evitar un constructor grande

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeno('Juan Jr');
    this.nombre = this._servicioFamiliar.getHermanoPequeno();
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '');
  }
  preguntar(){
    console.log(this._servicioFamiliar.preguntarPorHijo());
  }
}
