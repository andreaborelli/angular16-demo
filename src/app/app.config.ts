import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // fornisce il servizio HttpClient per inviare richieste HTTP a un server e ricevere le risposte

   ] // routes è un array di oggetti che rappresentano le rotte dell'applicazione
};

// ci permette di andare ad inserire tutta una serie di funzionalià che vogliamo abilitare all'interno della nostra applicazione

// una fetch di dati tramite REST API utilizzando il servizio HttpClient
// implica l'uso del servizio provideHttpClient() per inviare richieste HTTP (GET, POST, PUT, DELETE, ecc.)
// a un server e ricevere le risposte.
