import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage implements OnInit {

  form = new FormGroup({
    uid: new FormControl(''),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  });

  passwordType: String = "password";
  hide: Boolean = true;


  fireBaseService = inject(FirebaseService)
  utilsService = inject(UtilsService)

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async crearCuenta() {
    if (this.form.valid) {

      const cargando = await this.utilsService.loading();

      await cargando.present();


      this.fireBaseService.signUp(this.form.value as User).then(async res => {
        await this.fireBaseService.updateUser(this.form.value.nombre!, this.form.value.apellido!)

        let uid = res.user.uid;
        this.form.controls.uid.setValue(uid);
        this.setUserInfo(uid)
      }).catch(error => {
        console.log(error)
      }).finally(() => cargando.dismiss())

    }
  }

async setUserInfo(uid: string) {
  if(this.form.valid) {
    const cargando = await this.utilsService.loading();
    await cargando.present()

    let path = `users/${uid}`

    delete this.form.value.password

    this.fireBaseService.setDocument(path, this.form.value).then(async rest => {
      this.utilsService.saveInLocalStorage('user', this.form.value)
      this.utilsService.routerLink('/home')
      this.form.reset()
    }).catch(error => {
      console.log(error);
    }).finally(() => cargando.dismiss())
  }
}

  showOrHidePassword() {
    this.hide = !this.hide 

    if (this.hide) this.passwordType="password";
    else this.passwordType = "text";
  }
}
