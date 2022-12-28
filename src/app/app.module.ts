import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { MenuComponent } from './components/general/menu/menu.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/general/about/about.component';
import { SmrLoadingModule } from '@saimyr-software/styles';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SmrLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
