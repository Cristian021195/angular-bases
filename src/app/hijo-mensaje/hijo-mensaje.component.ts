import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo-mensaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo-mensaje.component.html',
  styleUrl: './hijo-mensaje.component.css'
})
export class HijoMensajeComponent {
  @Output() mensajeDesdeHijo = new EventEmitter();//evento en si
  mensaje:string='';//estado

  enviarMensaje(){//metodo que dispara el evento
    this.mensajeDesdeHijo.emit(this.mensaje);
  }

}
