import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgForOf} from "@angular/common";
import {Tarea, TareasService} from "../tareas.service";

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  standalone: true,
  styleUrls: ['./tareas.component.scss'],
  imports: [
    IonicModule,
    NgForOf
  ]
})
export class TareasComponent {
  service: TareasService;

  constructor(service: TareasService) {
      this.service = service;
  }

  get tareas() {
    return this.service.tareas;
  }
}
