import { Component } from '@angular/core';

@Component({
  selector: 'app-heading',
  template: `
  <svg class="icon"><use href="#companyLogoIcon"></use></svg>
  <div class="dropdown">
    <button (click)="toggleDropdown(dropdown)" class="dropbtn"><svg class="menuIcon"><use href="#menuIcon"></use></svg></button>
    <div #dropdown class="dropdown-content">
      <a href="">About</a>
      <a href="">Services</a>
      <a href="">Projects</a>
      <a href="">CONTACT</a>
    </div>
  </div>
  <div id="menu">
    <a href="">About</a>
    <a href="">Services</a>
    <a href="">Projects</a>
    <a href="">CONTACT</a>
  </div>
  `,
  styles: [`
  #menu {
    display: none;
    align-items: center;
    gap: 40px;
  }
  #menu > a:last-child {
    background-color: var(--white);
    padding: 15px 30px;
    border-radius: 40px;
    color: var(--black);
  }
  .icon {
    width: 155px;
    height: 30px;
  }
  .menuIcon {
    width: 30px;
    height: 30px;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    place-content: center;
    gap: 10px;
    text-align: center;
    position: absolute;
    background-color: var(--white);
    width: 90vw;
    padding: 20px 0 30px 0;
    overflow: auto;
    z-index: 1;
    right: 0;
    font-size: 20px;
  }
  .dropdown-content a {
    color: var(--black);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    opacity: 0.5;
    font-family: 'Barlow', sans-serif;
  }
  .dropdown-content a:last-child {
    font-family: 'Fraunces', sans-serif;
    background-color: var(--yellow);
    border-radius: 40px;
    opacity: 1;
    font-size: 16px;
    padding: 20px 30px;
  }
  .show {
    display: grid;
  }

  /* TABLET STYLES */
  @media(min-width: 768px) {
    #menu {
      display: flex;
    }
    .dropdown {
      display: none;
    }
  }

  /* DESKTOP STYLES */
  @media (min-width: 1281px) {
    .icon {
      height: 60px;
    }
  }

  /* HOVER STYLES */
  @media (hover: hover) {
    #menu > a:last-child:hover {
        background-color: hsla(0, 0%, 100%, 0.4);
        color: var(--white);
        transition: all .2s ease-in-out;
    }
    .dropdown-content a:hover {
      opacity: 1;
      transition: all .1s ease-in-out;
    }
  }
  `]
})
export class HeadingComponent {
  constructor() {}

  toggleDropdown(dropdown:any) {
    dropdown.classList.toggle('show');
  }
}
