import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { User } from '../models/user.model';

import { AngularFirestore } from '@angular/fire/compat/firestore'
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore'
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSvc = inject(UtilsService);

  //======Autenticacion======

  getAuth(){
    return getAuth();
  }
  //acceder
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //crear usuario
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }
  //Actualizar usuariio
  updateUser(nombre: string, apellido: string) {
    const nombreCompleto: string = nombre + " " + apellido
    return updateProfile(getAuth().currentUser!, {displayName:nombreCompleto})
  }

  //cerrar sesión
  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/login');
  }

  //======Base de datos======

  //setear un documento 
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data)
  }
  //obtenemos el documento
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }
  
}