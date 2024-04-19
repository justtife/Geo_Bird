import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() icon: string = "";
  @Input() btnStyle: "main" | "outline" = "outline";
  @Input() size: 'large' | 'small' | 'full' | 'width' = 'small';
  @Input() route: string = ""
}
