import { Component, OnInit } from '@angular/core';
import {IonContent, IonFab, IonFabButton, IonHeader, IonItem, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {TareasComponent} from "../tareas/tareas.component";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  standalone: true,
  styleUrls: ['./agregar-tarea.component.scss'],
  imports: [
    IonicModule
  ]
})
export class AgregarTareaComponent  {

  constructor() { }

}
