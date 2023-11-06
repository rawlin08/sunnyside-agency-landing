import { Component } from '@angular/core';

@Component({
  selector: 'app-main-slides',
  template: `
  <div class="noImg">
    <h2>Transform your brand</h2>
    <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
    <button><a href="">LEARN MORE</a></button>
  </div>
  <div>
    <picture>

    </picture>
  </div>
  <div>
    <picture>

    </picture>
  </div>
  <div class="noImg">
    <h2>Stand out to the right audience</h2>
    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
    <button><a href="">LEARN MORE</a></button>
  </div>
  <div>
    <h2>Graphic Design</h2>
    <p>Great design makes you memorable. We delievr artwork that underscores your brand message and captures potiential clients' attention.</p>
  </div>
  <div>
    <h2>Photography</h2>
    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
  </div>
  `,
  styles: [`
  .noImg {
    background-color: var(--white);
  }
  .noImg > h2 {
    font-size: 25px;
  }
  .noImg > p {
    margin: 30px 0;
  }
  `]
})
export class MainSlidesComponent {

}
