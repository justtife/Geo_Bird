import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, GoogleSigninButtonModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private authService: SocialAuthService, private router: Router) { }
  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user)
    });
  }
}
