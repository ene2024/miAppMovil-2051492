import {Component} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  standalone: true,
  styleUrl: "./test.component.scss",
  imports: [
    NgForOf,
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class TestComponent {
  constructor() {
  }

  valores = [
    {id: 1, nombre: "Prueba 1"},
    {id: 2, nombre: "Prueba 2"}
  ]

  title: string = "???";
  useAllSpace: boolean = true;
  useColor: boolean = true;
  src = "https://i.gifer.com/origin/68/68b376b5408907275c063e2c719fd9d9_w200.gif"

  onClick() {
    alert("wow, descubriste algo secreto;)");
  }
}
