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

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { ROUTES } from './app.routes';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    AbilitiesComponent,
    HeroDetailComponent,
    HeroEditComponent,
    NewHeroComponent
  ],
  imports: [
    NbThemeModule.forRoot({
      name: 'dark'
    }),
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
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
