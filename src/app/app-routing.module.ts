import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DesignComponent } from './design/design.component';
import { CartGuardGuard } from './guard/cart-guard.guard';
import { DesignGuardGuard } from './guard/design-guard.guard';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './login/login.component';
import { RecentsComponent } from './recents/recents.component';
import { SpecialsComponent } from './specials/specials.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"locations",
    component:LocationsComponent  
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: 'recents',
    component:RecentsComponent
  },
  {
    path:"specials",
    component:SpecialsComponent
  },
  {
    path:"design",
    component:DesignComponent,
    canActivate: [DesignGuardGuard],
    canLoad: [DesignGuardGuard]
  },
  {
    path:"cart",
    component:CartComponent,
    canActivate: [CartGuardGuard],
    canLoad: [CartGuardGuard]
  },
  {
    path:"**",
    component:HomeComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
