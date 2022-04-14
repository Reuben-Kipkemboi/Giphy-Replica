import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../mainService';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  faMagnifyingGlass =faMagnifyingGlass
  gifsImages :any[] = []

  constructor(private mainService: MainServiceService) { }

  ngOnInit(): void {
    // this.mainService.searchGifs().subscribe((response:any) => {
    //   // console.log("Response data",response);
    //   this.gifsImages = response.data;
    // })
  }

}
