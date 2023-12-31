import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <svg class="logo"><use href="#companyLogoIcon"></use></svg>
  <div id="menu">
    <a href="">About</a>
    <a href="">Services</a>
    <a href="">Projects</a>
  </div>
  <div class="socials">
    <a href="https://www.facebook.com/" target="_blank"><svg class="icon"><use href="#facebookIcon"></use></svg></a>
    <a href="https://www.instagram.com/" target="_blank"><svg class="icon"><use href="#instagramIcon"></use></svg></a>
    <a href="https://www.twitter.com/" target="_blank"><svg class="icon"><use href="#twitterIcon"></use></svg></a>
    <a href="https://www.pinterest.com/" target="_blank"><svg class="icon"><use href="#pinterestIcon"></use></svg></a>
  </div>

  `,
  styles: [`
  h1 {
    text-align: center;
  }
  .socials {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
  .logo {
    height: 30px;
  }
  #menu {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 30px 0 60px 0;
  }

  /* HOVER STYLES */
  @media (hover: hover) {
    a:hover {
        color: var(--white);
        transition: all .1s ease-in-out;
    }
}
  `]
})
export class FooterComponent {

}
