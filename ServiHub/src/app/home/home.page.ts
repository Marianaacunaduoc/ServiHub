import { Component, OnInit, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';
import { User } from '../models/user.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(private navCtrl: NavController, private router: Router) {
    
  }

  nombreUsuario!: string;

  utilsService = inject(UtilsService)

  ngOnInit() {
    const user: User = this.utilsService.getFromLocalStorage("user") as User;
    console.log("este es mi nombre" + user.nombre)
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

  signOut(){
    this.firebaseSvc.signOut();
  }


}
