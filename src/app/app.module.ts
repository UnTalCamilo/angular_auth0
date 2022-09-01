import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/shared/search/search.component';
import { HideComponent } from './components/hide/hide.component';
import { FilterPipe } from './components/pipes/filter.pipe';


import { AuthModule } from '@auth0/auth0-angular';
import { PrivateComponent } from './components/private/private.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    HeroesComponent,
    HeroComponent,
    SearchComponent,
    HideComponent,
    FilterPipe,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-amy-b116.us.auth0.com',
      clientId: 'Y4PRKLktnDPmsiijkjdcbxkUEVQWkHCR',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
