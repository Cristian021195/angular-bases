import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { HijoMensajeComponent } from './hijo-mensaje/hijo-mensaje.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContadorComponent,
    HijoMensajeComponent,
    //IMPORTANTE! Las importaciones ahora se hacen aqui, ya no existe app.module.ts en angular >= 17
    FormsModule,//formulario clasico template
    ReactiveFormsModule//formulario reactivo
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*valorDesdePadre:string = "Valor desde padre";
  recibido:string = '';//5
  title = 'angular-bases';

  recibeMensaje(msg:string){//6
    this.recibido = msg;
  }*/
  mensajeRecibido:string = '';
  recibirMensaje($event:string){
    this.mensajeRecibido = $event;
  }

  
}
