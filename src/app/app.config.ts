import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
  {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            "32156017357-kh2petjdic710rdbjlp0jnql7tikq8m7.apps.googleusercontent.com"
          )
        },
      ],
      onError: (err) => {
        console.log("This is the error")
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }
  ]
};
