export class Pregunta {
    titulo: string;
    respuestaCorrecta: number;
    respuestas: string[];

    constructor(pTitulo: string, pRespuestaCorrecta: number, pRespuestas: string[]) {
        this.titulo = pTitulo;
        this.respuestaCorrecta = pRespuestaCorrecta;
        this.respuestas = pRespuestas;
    }
}
