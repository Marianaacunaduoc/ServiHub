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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'crear-cuenta',
    loadChildren: () => import('./crear-cuenta/crear-cuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'publicar-servicio',
    loadChildren: () => import('./publicar-servicio/publicar-servicio.module').then( m => m.PublicarServicioPageModule)
  },
  {
    path: 'ver-servicio',
    loadChildren: () => import('./ver-servicio/ver-servicio.module').then( m => m.VerServicioPageModule)
  },
  {
    path: 'ver-publicacion',
    loadChildren: () => import('./ver-publicacion/ver-publicacion.module').then( m => m.VerPublicacionPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }