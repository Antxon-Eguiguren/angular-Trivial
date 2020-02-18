import { Component, OnInit } from '@angular/core';
import { JuegoService } from './juego.service';
import { Pregunta } from './models/pregunta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pregunta: Pregunta;
  preguntaActual: number;
  mensaje: string;

  constructor(private juegoService: JuegoService) {
    this.preguntaActual = 0;
    this.mensaje = '';
  }

  ngOnInit() {
    this.pregunta = this.juegoService.getPregunta();
  }

  manejarRespuestaSeleccionada($event) {
    // $event tiene la respuestaSeleccionada

    // Consigo la posición de la respuesta correcta
    const posicionRespuestaCorrecta = this.pregunta.respuestaCorrecta;

    // Consigo el valor de la respuesta correcta
    const respuestaCorrecta = this.pregunta.respuestas[posicionRespuestaCorrecta];

    if ($event === respuestaCorrecta) {
      this.juegoService.aumentarPreguntaActual();
      this.pregunta = this.juegoService.getPregunta();
      console.log('Bien hecho.');
    } else {
      console.log('Prueba de nuevo.');
    }
  }
}
