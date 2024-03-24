import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-verified-message',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './order-verified-message.component.html',
  styleUrl: './order-verified-message.component.scss'
})
export class OrderVerifiedMessageComponent {
  message = 'Order has been verified successfully!';
}
