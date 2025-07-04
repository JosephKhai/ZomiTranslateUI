import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateComponent } from './translate/translate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ZomiTranslator';
}
