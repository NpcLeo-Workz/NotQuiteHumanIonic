import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'races',
    loadChildren: () => import('./pages/races/races.module').then( m => m.RacesPageModule)
  },
  {
    path: 'races/:index',
    loadChildren: () => import('./pages/races/race/race.module').then( m => m.RacePageModule)
  },
  {
    path: 'races/:index/create-updaterace',
    loadChildren: () => import('./pages/races/create-updaterace/create-updaterace.module')
      .then( m => m.CreateUpdateracePageModule)
  },
  {
    path: 'create-updaterace',
    loadChildren: () => import('./pages/races/create-updaterace/create-updaterace.module')
      .then( m => m.CreateUpdateracePageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/languages/languages.module').then( m => m.LanguagesPageModule)
  },
  {
    path: 'languages/:index',
    loadChildren: () => import('./pages/languages/language/language.module').then( m => m.LanguagePageModule)
  },
  {
    path: 'traits',
    loadChildren: () => import('./pages/traits/traits.module').then( m => m.TraitsPageModule)
  },
  {
    path: 'traits/:index',
    loadChildren: () => import('./pages/traits/trait/trait.module').then( m => m.TraitPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
