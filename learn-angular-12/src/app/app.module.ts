import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnSalePipe } from './on-sale.pipe';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { HighLightDirective } from './Directives/high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnSalePipe,
    PageNotFoundComponent,
    AboutComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
