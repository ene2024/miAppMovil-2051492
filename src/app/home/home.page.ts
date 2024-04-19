import {Component, ViewChild} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab, IonModal} from '@ionic/angular/standalone';
import {NgIf} from "@angular/common";
import {TareasComponent} from "../tareas/tareas.component";
import {Router, RouterLink} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {AgregarTareaComponent} from "../agregar-tarea/agregar-tarea.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NgIf, TareasComponent, IonFabButton, IonFab, RouterLink, IonModal, AgregarTareaComponent],
})
export class HomePage {
}
