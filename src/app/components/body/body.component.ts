import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import AOS from 'aos';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit {
  user: any;

  constructor(private authService: SocialAuthService) { }
  ngOnInit() {
    AOS.init()
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      this.user = user;
    }).catch(error => {
      console.log('Error signing in with Google:', error);
    });
  }
}

