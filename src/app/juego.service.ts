import { Injectable } from '@angular/core';
import { Pregunta } from './models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  arrPreguntas: Pregunta[];
  preguntaActual: number;

  constructor() {
    this.arrPreguntas = [
      new Pregunta('¿2 + 2?', 0, ['4', '5', '7', '1']),
      new Pregunta('¿3 + 3?', 2, ['2', '5', '6', '1'])
    ];
    this.preguntaActual = 0;
  }

  getPregunta() {
    return this.arrPreguntas[this.preguntaActual];
  }

  aumentarPreguntaActual() {
    this.preguntaActual++;
  }

}
