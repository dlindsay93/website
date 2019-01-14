import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  theTruth: string = "";

  constructor() { }

  ngOnInit() {
  }

truthClick(){
  this.theTruth = "Please Hire Me";
}


}
