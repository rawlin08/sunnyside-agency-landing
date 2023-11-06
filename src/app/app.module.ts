import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { MenuComponent } from './components/menu.component';
import { HeadingComponent } from './components/heading.component';
import { FooterComponent } from './components/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainSlidesComponent } from './components/main-slides.component';
import { TestimonialsComponent } from './components/testimonials.component';
import { BottomImagesComponent } from './components/bottom-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    HeadingComponent,
    FooterComponent,
    MainSlidesComponent,
    TestimonialsComponent,
    BottomImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
