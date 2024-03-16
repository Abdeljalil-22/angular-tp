import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChronoComponent } from './chrono/chrono.component';
import { Personne } from './class/personne';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directive/highlight.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
   HeaderComponent,
   FormsModule,
   CommonModule,
   HighlightDirective,

    // ChronoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
isYes: string|boolean= true
onclick(arg0: number) {
// throw new Error('Method not implemented.');
console.log("test",arg0)
}
  title = 'my-app';
  data ="test data"
  text= 'file'
 p =new Personne("22","test","test"); 
 list = [1,2,3,45,5,5]

}
