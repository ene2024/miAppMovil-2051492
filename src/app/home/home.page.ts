import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton, IonFab} from '@ionic/angular/standalone';
import {NgIf} from "@angular/common";
import {TareasComponent} from "../tareas/tareas.component";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, NgIf, TareasComponent, IonFabButton, IonFab, RouterLink],
})
export class HomePage {
}
