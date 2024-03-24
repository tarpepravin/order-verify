import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchOrdersComponent } from './fetch-orders/fetch-orders.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FetchOrdersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
