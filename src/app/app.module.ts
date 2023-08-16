import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GenerateCodeComponent } from './shared/generate-code/generate-code.component';
import { NgxCurrencyDirective } from 'ngx-currency';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { TablesComponent } from './shared/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    DashboardComponent,
    GenerateCodeComponent,
    ViewDetailComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    NgxCurrencyDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
