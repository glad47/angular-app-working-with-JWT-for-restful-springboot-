import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigButtonComponent } from './big-button/big-button.component';
import { LittleButtonComponent } from './little-button/little-button.component';
import { CloudTitleComponent } from './cloud-title/cloud-title.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GroupBoxComponent } from './group-box/group-box.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NonWrapPipePipe } from './non-wrap-pipe.pipe';
import { WrapPipePipe } from './wrap-pipe.pipe';
import { CartComponent } from './cart/cart.component';
import { DesignComponent } from './design/design.component';
import { RecentsComponent } from './recents/recents.component';
import { SpecialsComponent } from './specials/specials.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
 import { TokenInterceptorInterceptor } from './auth/token-interceptor.interceptor';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { CartGuardGuard } from './guard/cart-guard.guard';
import { DesignGuardGuard } from './guard/design-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    BigButtonComponent,
    LittleButtonComponent,
    CloudTitleComponent,
    FooterComponent,
    HomeComponent,
    GroupBoxComponent,
    LocationsComponent,
    LoginComponent,
    HeaderComponent,
    NonWrapPipePipe,
    WrapPipePipe,
    CartComponent,
    DesignComponent,
    RecentsComponent,
    SpecialsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  exports:[
    AppComponent,
    BigButtonComponent,
    LittleButtonComponent,
    CloudTitleComponent,
    FooterComponent,
    HomeComponent,
    GroupBoxComponent,
    LocationsComponent,
    LoginComponent,
    HeaderComponent,
    NonWrapPipePipe,
    WrapPipePipe,
    CartComponent,
    DesignComponent,
    RecentsComponent,
    SpecialsComponent
  ],
  providers: [
    AuthGuardGuard,
    CartGuardGuard,
    DesignGuardGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorInterceptor,
    multi:true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
