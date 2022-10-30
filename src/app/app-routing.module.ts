import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RestriccionHorarioGuard } from '../app/guards/restriccion-horario.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [RestriccionHorarioGuard]
  },
  {
    path: 'viajes',
    loadChildren: () => import('./viajes/viajes.module').then( m => m.ViajesPageModule),
    canActivate: [RestriccionHorarioGuard]
  },
  {
    path: 'credencial',
    loadChildren: () => import('./credencial/credencial.module').then( m => m.CredencialPageModule),
    canActivate: [RestriccionHorarioGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./viaje/viaje.module').then( m => m.ViajePageModule),
    canActivate: [RestriccionHorarioGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
