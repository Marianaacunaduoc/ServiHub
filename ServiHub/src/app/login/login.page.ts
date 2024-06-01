import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validarForm: FormGroup;

  ngOnInit() {
  }

  emailCuenta: string = "";
  contrasena: string = "";

  constructor(private router: Router, private fb: FormBuilder, private navCtrl: NavController) { 
    this.validarForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/) 
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]{8}$/) 
      ]]
    });
  }

  get email() {
    return this.validarForm.get('email');
  }

  get password() {
    return this.validarForm.get('password');
  }

  ingresar() {
    if (this.validarForm.valid) {

      this.router.navigate(['/home', { emailCuenta: this.emailCuenta }]);

    }else {
      console.log('Datos ingresados no son validos');
    }
  }

  goToCrearCuenta() {
    this.navCtrl.navigateForward('/crear-cuenta');
  }
}

