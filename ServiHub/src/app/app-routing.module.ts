import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoAuthGuard]
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
    path: 'api-consumo',
    loadChildren: () => import('./api-consumo/api-consumo.module').then( m => m.ApiConsumoPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
