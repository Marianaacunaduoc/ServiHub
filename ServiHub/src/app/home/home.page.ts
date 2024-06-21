import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) {
    
  }

  nombreUsuario!: string;

  utilsService = inject(UtilsService)

  ngOnInit() {
    const user: User = this.utilsService.getFromLocalStorage("user") as User;
    this.nombreUsuario = user.nombre + " " + user.apellido
  }


  goToPublicarServicio() {
    this.router.navigate(['/publicar-servicio']);
  }

  goToVerServicio(servicio: string) {
    this.router.navigate(['/ver-servicio',{servicio}]);
  }

  verValores(){
    this.router.navigate(['/api-consumo'])
  }

}
