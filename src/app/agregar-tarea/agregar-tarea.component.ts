import {Component} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {TareasService} from "../tareas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  standalone: true,
  styleUrls: ['./agregar-tarea.component.scss'],
  imports: [
    IonicModule,
    FormsModule
  ]
})
export class AgregarTareaComponent {

  tareaForm: TareaForm;
  service: TareasService;
  router: Router;

  constructor(service: TareasService, router: Router) {
    this.service = service;
    this.tareaForm = new TareaForm();
    this.router = router;
  }

  agregarTarea(): void {
    if (this.tareaForm.name.trim().length == 0) {
      return;
    }

    this.service.addTareaFromForm(this.tareaForm);
    this.tareaForm = new TareaForm();
    this.router.navigate(['/home']);
  }

  isValid(dateStr: string): boolean {
    let date: Date = new Date(dateStr);
    let now: Date = new Date();

    return date.getUTCMonth() >= now.getUTCMonth() && date.getUTCDate() >= now.getUTCDate() - 1;
  }
}

export class TareaForm {

  private _desc: string;
  private _date: Date;
  private _name: string

  constructor(desc: string = "", date: Date = new Date(), name: string = "") {
    this._desc = desc;
    this._date = date;
    this._name = name;
  }

  get desc(): string {
    return this._desc;
  }

  get actualDate(): Date {
    return this._date;
  }

  get date(): string {
    return this._date.toISOString();
  }

  set date(value: string) {
    this._date = new Date(value);
  }

  get name(): string {
    return this._name;
  }

  set desc(value: string) {
    this._desc = value;
  }

  set name(value: string) {
    this._name = value;
  }
}
