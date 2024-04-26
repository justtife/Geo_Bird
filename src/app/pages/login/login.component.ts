import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserserviceService } from '../../services/userservice.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ButtonComponent, GoogleSigninButtonModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private authService: SocialAuthService, private router: Router, private http: UserserviceService) { }
  countries: any;
  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
  ngOnInit(): void {
    // this.authService.authState.subscribe((user) => {
    //   console.log(user)
    // });
    this.http.getAllCountries().subscribe((response) => {
      const sortedData = response.sort((a: any, b: any) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.countries = sortedData;
    });
  }
}
