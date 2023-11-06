import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <header>
    <app-heading></app-heading>
  </header>
  <main>
    <app-main-slides></app-main-slides>
    <app-testimonials></app-testimonials>
  </main>
  <footer>
    <app-footer></app-footer>
  </footer>
  `,
  styles: [``]
})
export class HomeComponent {

}
