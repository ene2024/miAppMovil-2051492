import {Component} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
    IonicModule
  ]
})
export class TestComponent {
  constructor() {
  }

  valores = [
    {id: 1, nombre: "Prueba 1"},
    {id: 2, nombre: "Prueba 2"},
    {id: 3, nombre: "Prueba 3"}
  ]
}
