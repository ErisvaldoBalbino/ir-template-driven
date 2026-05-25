import { Component, signal } from '@angular/core';
import { ContatoComponent } from './components/contato-component/contato-component';

@Component({
  selector: 'app-root',
  imports: [ContatoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('template-driven');
}
