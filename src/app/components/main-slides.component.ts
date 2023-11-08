import { Component } from '@angular/core';

@Component({
  selector: 'app-main-slides',
  template: `
  <div>
    <picture>
      <source srcset="assets/images/desktop/image-transform.jpg" media="(min-width: 1281px)" />
      <img src="assets/images/mobile/image-transform.jpg" alt="" />
    </picture>
  </div>
  <div class="noImg">
    <h2>Transform your brand</h2>
    <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
    <a id="transformLink" href="">LEARN MORE</a>
  </div>
  <div>
    <picture>
      <source srcset="assets/images/desktop/image-stand-out.jpg" media="(min-width: 1281px)" />
      <img src="assets/images/mobile/image-stand-out.jpg" alt="" />
    </picture>
  </div>
  <div class="noImg">
    <h2>Stand out to the right audience</h2>
    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
    <a id="standoutLink" href="">LEARN MORE</a>
  </div>
  <div class="text">
    <picture>
      <source srcset="assets/images/desktop/image-graphic-design.jpg" media="(min-width: 1281px)" />
      <img src="assets/images/mobile/image-graphic-design.jpg" alt="" />
    </picture>
    <div class="textInImg">
      <h2>Graphic Design</h2>
      <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potiential clients' attention.</p>
    </div>
  </div>
  <div class="text">
    <picture>
      <source srcset="assets/images/desktop/image-photography.jpg" media="(min-width: 1281px)" />
      <img src="assets/images/mobile/image-photography.jpg" alt="" />
    </picture>
    <div class="textInImg">
      <h2>Photography</h2>
      <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
    </div>
  </div>
  `,
  styles: [`
  .text {
    position: relative;
  }
  .textInImg {
    position: absolute;
    bottom: 90px;
    color: var(--dark-cyan);
    text-align: center;
    padding: 0 40px;
  }
  .textInImg > h2 {
    font-size: 40px;
    margin: 0 0 30px 0;
    font-family: 'Fraunces', sans-serif;
  }
  .textInImg > p {
    font-size: 18px;
    line-height: 30px;
    font-family: 'Barlow', sans-serif;
  }
  .noImg {
    background-color: var(--white);
    padding: 50px 30px;
    text-align: center;
  }
  .noImg > h2 {
    font-size: 40px;
    font-family: 'Fraunces', sans-serif;
  }
  a {
    font-family: 'Fraunces', sans-serif;
    min-width: 0;
  }
  #transformLink {
    border-bottom: 5px solid hsla(51, 100%, 49%, 0.3);
  }
  #standoutLink {
    border-bottom: 5px solid hsla(7, 99%, 70%, 0.3);
  }
  .noImg > p {
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    line-height: 30px;
    margin: 30px 0;
    color: var(--gray);
  }
  img {
    width: 100%;
    height: 100%;
  }

  /* TABLET STYLES */
  @media (min-width: 768px) {
    .noImg {
      display: grid;
      place-content: center;
      text-align: left;
      padding: 50px;
    }
    a {
      font-size: 20px;
      justify-self: left;
    }
    .textInImg {
      bottom: 40px;
      padding: 0 35px;
    }
  }
  @media (min-width: 1000px) {
    .textInImg {
      bottom: 100px;
    }
  }

  /* DESKTOP STYLES */
  @media (min-width: 1281px) {
    .noImg {
      padding: 0 150px;
    }
    .textInImg {
      bottom: 40px;
      padding: 0 125px;
    }
  }
  @media (min-width: 1600px) {
    .textInImg {
      bottom: 90px;
      padding: 0 240px;
    }
  }

  @media (hover: hover) {
    #transformLink:hover {
      border-bottom: 5px solid hsla(51, 100%, 49%, 1);
      transition: all .1s ease-in-out;
    }
    #standoutLink:hover {
      border-bottom: 5px solid hsla(7, 99%, 70%, 1);
      transition: all .1s ease-in-out;
    }
  }
  `]
})
export class MainSlidesComponent {
  constructor() {}
}
