import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../mainService';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // we want to store our data in some form of array
  gifsImages :any[] = []
  // lets inject our service or import our service in this constructor
  constructor(private mainService:MainServiceService) { }

  ngOnInit(): void {
    // lets use our service
    this.mainService.fetchTrendingGifs().subscribe((response:any) => {
      console.log("Response data",response);
      this.gifsImages = response.data;
    })
  
  }
}
