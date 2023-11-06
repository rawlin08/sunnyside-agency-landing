import { Component } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
  <h1>sunnyside</h1>
  <div id="menu">
    <a href="">About</a>
    <a href="">Services</a>
    <a href="">Projects</a>
    <a href="">CONTACT</a>
  </div>
  `,
  styles: [`
  #menu {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  #menu > a:last-child {
    background-color: var(--white);
    padding: 15px 30px;
    border-radius: 40px;
    color: var(--black);
  }
  `]
})
export class HeadingComponent {

}
