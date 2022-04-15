import { Component, OnInit } from '@angular/core';
import { MainService } from '../mainService';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  gifsImages: any[] = [];
  searchTerm!: string;
  // searchTerm: string;
  constructor(public mainService: MainService) {}
  faMagnifyingGlass = faMagnifyingGlass;
  
  // }

  searchNewGifs() {
    this.mainService.searchGifs(this.searchTerm).subscribe((data) => {
      this.gifsImages = data.data
    })
    alert("searching for " + this.searchTerm);
  }

  ngOnInit(): void {}

}
