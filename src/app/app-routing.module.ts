import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import our components
import{MainComponent} from './main/main.component';
import { SearchComponent } from './search/search.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  // declaring our routes
  {path: 'main', component: MainComponent},
  {path: 'search', component: SearchComponent},
  // { path:'**', component:NotfoundComponent},

  { path: '', redirectTo:"/main", pathMatch:"full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
