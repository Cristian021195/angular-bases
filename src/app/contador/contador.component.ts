import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  @Input() titulo:string = "";
  @Output() mensajeEvento = new EventEmitter<string>();//2 creamos el evento (evento != metodo) para tener en cuenta
  mensaje:string = "";//3
  cont:number = 0;
  incrementar(){
    this.cont++;
  }
  decrementar(){
    this.cont--;
  }
  enviarMensaje(){//4
    this.mensajeEvento.emit(this.mensaje);
  }
}
