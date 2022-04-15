import { Component, OnInit } from '@angular/core';
import { MainService} from '../mainService'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faMagnifyingGlass =faMagnifyingGlass

  constructor() { }

  ngOnInit(): void {
  }

}
