import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  constructor(private router: Router) { }

  fechaSeleccionada: Date = new Date();

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
