import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template :`
    <main>
      <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.png" alt="logo" aria-hidden="true" height="50">
      <section class="content">
        <app-home></app-home>
      </section>

      </header>
    </main>`,
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'homes';
}
