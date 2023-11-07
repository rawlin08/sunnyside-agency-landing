import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
  <h2>WE ARE CREATIVES</h2>
  <svg class="arrow"><use href="#arrowIcon"></use></svg>
  <picture>
    <source srcset="assets/images/desktop/image-header.jpg" media="(min-width: 751px)" />
    <img src="assets/images/mobile/image-header.jpg" alt="">
  </picture>
  `,
  styles: [`
  h2 {
    color: var(--white);
    font-size: 45px;
    letter-spacing: 4px;
    text-align: center;
    font-family: 'Fraunces', sans-serif;
    margin: 40px 0 0 0;
  }
  .arrow {
    position: absolute;
    top: 200px;
    color: var(--white);
  }
  img {
    width: 100%;
    height: 100%;
  }

  /* TABLET STYLES */
  @media (min-width: 768px) {
    .arrow {
      top: 125px;
    }
  }

  /* DESKTOP STYLES */
  @media (min-width: 1281px) {
    h2 {
      font-size: 60px;
      letter-spacing: 10px;
    }
    .arrow {
      top: 150px;
    }
  }
  `]
})
export class HeroComponent {
  constructor() {}
}
