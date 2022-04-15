import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importing our HttpClientModule
import { HttpClientModule } from '@angular/common/http';
// fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormComponent } from './form/form.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormComponent,
    MenuComponent,
    MainComponent,
    SearchComponent,
    SearchResultsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // our Http client module
    HttpClientModule,
    // Fontawesome icons
    FontAwesomeModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
