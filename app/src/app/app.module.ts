import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
  NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService,
  NbCardModule, NbListModule, NbButtonModule, NbMenuModule, NbIconModule, NbAccordionModule, NbInputModule
} from '@nebular/theme';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NbThemeModule.forRoot({
      name: 'dark'
    }),
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbIconModule,
    NbListModule,
    NbButtonModule,
    NbAccordionModule,
    NbCardModule,
    NbSidebarModule,
    BrowserModule
  ],
  providers: [
    NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
