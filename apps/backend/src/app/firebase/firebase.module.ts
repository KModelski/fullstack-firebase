import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as firebase from 'firebase/app';

@Module({})
export class FirebaseModule {
  static firebaseApp: firebase.FirebaseApp;

  constructor(private configService: ConfigService) {
    if (!FirebaseModule.firebaseApp) {
      FirebaseModule.firebaseApp = firebase.initializeApp({
        apiKey: this.configService.get<string>('FIREBASE_API_KEY'),
        authDomain: this.configService.get<string>('FIREBASE_AUTH_DOMAIN'),
        projectId: this.configService.get<string>('FIREBASE_PROJECT_ID'),
        storageBucket: this.configService.get<string>(
          'FIREBASE_STORAGE_BUCKET'
        ),
        messagingSenderId: this.configService.get<string>(
          'FIREBASE_MESSAGING_SENDER_ID'
        ),
        appId: this.configService.get<string>('FIREBASE_APP_ID'),
      });
    }
  }
}
