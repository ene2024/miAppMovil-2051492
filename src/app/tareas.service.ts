import {Injectable} from '@angular/core';
import {TareaForm} from "./agregar-tarea/agregar-tarea.component";

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  tareas: Tarea[];

  constructor() {
    this.tareas = [];
    this.tareas[0] = (new Tarea("Prueba", "descripcion aleatoria", new Date()));
    this.tareas[1] = (new Tarea("Prueba2", "descripcion aleatoria", new Date()));
  }

  addTarea(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  deleteTarea(tarea: Tarea) {
    this.tareas.splice(this.tareas.indexOf(tarea), 1)
  }

  addTareaFromForm(form: TareaForm) {
    this.tareas.push(new Tarea(form.name, form.desc, form.actualDate));
  }

}

export class Tarea {
  private readonly _name: string;
  private readonly _desc: string;
  private readonly _date: Date;

  constructor(name: string, desc: string, date: Date) {
    this._name = name;
    this._desc = desc;
    this._date = date;
  }

  get name(): string {
    return this._name;
  }

  get desc(): string {
    return this._desc;
  }

  get date(): Date {
    return this._date;
  }

  get formattedDate(): string {
    return this._date.toDateString() + " " + this.date.getHours() + ":" + this.date.getMinutes();
  }
}
