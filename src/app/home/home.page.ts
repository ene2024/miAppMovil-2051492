import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {TestComponent} from "../test/test.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TestComponent, NgIf],
})
export class HomePage {
  constructor() {
      console.log("AppComponent: Constructor")
  }

  ngOnChanges() {
    console.log("AppComponent: ngOnChanges")
  }

  ngOnInit() {
    console.log("AppComponent: ngOnInit")
  }

  ngDoCheck() {
    console.log("AppComponent: ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("AppComponent: ngAfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("AppComponent: ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("AppComponent: ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("AppComponent: ngAfterViewChecked")
  }

  ngOnDestroy() {
    console.log("AppComponent: ngOnDestroy")
  }

  hidTest: boolean = false;
}
