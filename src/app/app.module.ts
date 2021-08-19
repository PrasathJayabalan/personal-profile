import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/Header/headers/headers.component';
import { TechnologiesComponent } from './components/Technology/technologies/technologies.component';
import { ExperienceComponent } from './components/Experience/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    TechnologiesComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
