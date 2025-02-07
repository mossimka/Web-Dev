import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <img class="brand-logo" src="/assets/logo.png" alt="logo">
      <input type="text">
      <button type="">
    </header>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'music-shop';
}
