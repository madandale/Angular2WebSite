import { Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './contents/home/home.component';
import { AboutComponent } from './contents/about/about.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  title = 'One Stop Shops';

  constructor() {}
}
