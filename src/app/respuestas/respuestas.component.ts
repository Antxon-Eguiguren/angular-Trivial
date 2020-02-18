import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pregunta } from '../models/pregunta';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent implements OnInit {

  @Input() pregunta: Pregunta;
  @Output() respuestaSeleccionada: EventEmitter<string>;

  constructor() {
    this.respuestaSeleccionada = new EventEmitter();
  }

  ngOnInit() {
  }

  manejarClickRespuesta(pRespuesta) {
    this.respuestaSeleccionada.emit(pRespuesta);
  }

}
