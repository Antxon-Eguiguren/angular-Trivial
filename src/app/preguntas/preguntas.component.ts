import { Component, OnInit, Input } from '@angular/core';
import { Pregunta } from '../models/pregunta';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  @Input() pregunta: Pregunta;

  constructor() { }

  ngOnInit() {
  }

}
