import { Component, OnInit } from '@angular/core';
import { MainService } from '../mainService';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  gifsImages: any[] = [];
  // searchTerm: string |any;
  constructor(public mainService: MainService) {}
  

  

  ngOnInit(): void {}

}
