import { Component, OnInit } from '@angular/core';
import { MainService } from '../mainService';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // we want to store our data in some form of array
  gifsImages :any[] = []
  searchTerm!: string;
  // lets inject our service or import our service in this constructor
  constructor(public MainService:MainService) { }
  faMagnifyingGlass = faMagnifyingGlass;

  searchNewGifs() {
    this.MainService.searchGifs(this.searchTerm).subscribe((response: any) => {
      this.gifsImages = response.data
    })
    alert("searching for " + this.searchTerm);
  }

  ngOnInit(): void {
    // lets use our service to fetch the data
    this.MainService.fetchTrendingGifs().subscribe((response:any) => {
      // console.log("Response data",response); // lets see what we have as our data in the console
      this.gifsImages = response.data;
    })

    
  }
}
