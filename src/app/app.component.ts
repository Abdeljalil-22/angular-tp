import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChronoComponent } from './chrono/chrono.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
   HeaderComponent,
    ChronoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  data ="test data"
}
