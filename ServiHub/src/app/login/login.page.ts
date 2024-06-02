import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  });


  fireBaseService = inject(FirebaseService)
  utilsService = inject(UtilsService)
  
  passwordType: String = "password";
  hide: Boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async ingresar() {
    if (this.form.valid) {
      const loading = await this.utilsService.loading()
      await loading.present()

      this.fireBaseService.signIn(this.form.value as User).then(res => {
        this.getUserInfo(res.user.uid);
      }).catch(error => {
        console.log(error);

        this.utilsService.presentToast({
          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      }).finally(() => {
        loading.dismiss()
      })

    } else {
      console.log('Datos ingresados no son validos');
    }
  }

  goToCrearCuenta() {
    this.router.navigateByUrl('/crear-cuenta');
  }

  showOrHidePassword() {
    this.hide = !this.hide 

    if (this.hide) this.passwordType="password";
    else this.passwordType = "text";
  }

  async getUserInfo(uid: string) {
    if(this.form.valid) {
      const cargando = await this.utilsService.loading();
      await cargando.present()
  
      let path = `users/${uid}`

      this.fireBaseService.getDocument(path).then( user => {
        this.utilsService.saveInLocalStorage('user', user)
        this.utilsService.routerLink('/home')
        this.form.reset()
      }).catch(error => {
        console.log(error);
      }).finally(() => cargando.dismiss())
    }
  }

}
