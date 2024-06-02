import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { User } from '../models/user.model';

import { AngularFirestore } from '@angular/fire/compat/firestore'
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  auth = inject(AngularFireAuth)
  firestore = inject(AngularFirestore)

  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  updateUser(nombre: string, apellido: string) {
    const nombreCompleto: string = nombre + " " + apellido
    return updateProfile(getAuth().currentUser!, {displayName:nombreCompleto})
  }

  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data)
  }

  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }
  
}