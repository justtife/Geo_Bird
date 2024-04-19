import { Component,OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import AOS from 'aos';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent implements OnInit{
  ngOnInit() {
    AOS.init()
  }
}
