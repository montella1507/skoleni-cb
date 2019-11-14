import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbCardModule, NbListModule, NbButtonModule } from '@nebular/theme';
// import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // NbThemeModule.forRoot({
    //   name: 'dark'
    // }),
    // RouterModule.forRoot([]),
    // NbLayoutModule,
    // NbListModule,
    // NbButtonModule,
    // NbCardModule,
    // NbSidebarModule,
    BrowserModule
  ],
  providers: [
    //NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
