import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import our components
import{MainComponent} from './main/main.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  // declaring our routes
  {path: 'main', component: MainComponent},
  {path: 'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
