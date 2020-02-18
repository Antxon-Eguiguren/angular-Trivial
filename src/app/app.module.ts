import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RespuestasComponent } from './respuestas/respuestas.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntasComponent,
    RespuestasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
