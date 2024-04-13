import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgForOf} from "@angular/common";

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

  constructor() {
    this.tareas = [];
    this.tareas[0] = (new Tarea("Prueba", new Date()));
    this.tareas[1] = (new Tarea("Prueba2", new Date()));
    this.tareas[2] = (new Tarea("Prueba3", new Date()));
  }

  tareas: Tarea[];
}

class Tarea {
  private readonly _desc: string;
  private readonly _date: Date;

  constructor(desc: string, date: Date) {
    this._desc = desc;
    this._date = date;
  }

  get desc(): string {
    return this._desc;
  }

  get date(): Date {
    return this._date;
  }

  get formattedDate(): string {
    return this._date.toDateString() + " " +this.date.getHours()+":"+this.date.getMinutes();
  }
}
