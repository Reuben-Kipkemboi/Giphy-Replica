import { Component, OnInit } from '@angular/core';
import {faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faEyes =faEye ;

  constructor() { }

  ngOnInit(): void {
  }

}
