import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import 'firebase/firestore';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userId: string;
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  getUser(): Promise<firebase.User> {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signup(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    console.log("hello");
    try {
      const newUserCredential: firebase.auth.UserCredential = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log("hello1");
      await this.firestore
        .doc(`userProfile/${newUserCredential.user.uid}`)
        .set({ email });
        console.log("hello2");
      return newUserCredential;
    } catch (error) {
      throw error;
    }
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
