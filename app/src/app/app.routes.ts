import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { NewHeroComponent } from './components/new-hero/new-hero.component';

export const ROUTES: Route[] = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'heroes/detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes/edit/:id',
        component: HeroEditComponent
    },
    {
        path: 'heroes/new',
        component: NewHeroComponent
    },
    {
        path: 'abilities',
        component: AbilitiesComponent
    }
];
