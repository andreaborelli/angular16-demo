import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // bootstrapApplication è un metodo di Angular che inizializza l'applicazione
  .catch((err) => console.error(err));        // AppComponent è il componente principale dell'applicazione
                                              // appConfig è l'oggetto di configurazione dell'applicazione

  // primo file che l'application analizza quando viene eseguita
