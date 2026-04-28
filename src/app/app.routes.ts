import { Routes } from '@angular/router';
import { Films } from './components/films/films';
import { Home } from './pages/home/home';
import { Details } from './pages/details/details';

export const routes: Routes = [
  {path: '', component: Home },
  {path: 'films', component: Films },
  {path: 'details/:slug', component: Details },
];
