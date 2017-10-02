import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './contents/home/home.component';
import { AboutComponent } from './contents/about/about.component';


const appRoutes: Routes = [
  { path: '/home', component: HomeComponent },
  { path: '/about',        component: AboutComponent },
  { path: '/', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
