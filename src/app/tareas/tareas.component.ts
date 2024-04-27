import { Component, OnInit } from '@angular/core';
import {TareasService} from "../tareas.service";

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent {
  constructor(protected service: TareasService) {
    this.service = service;
  }

  get tareas() {
    return this.service.tareas;
  }

}
