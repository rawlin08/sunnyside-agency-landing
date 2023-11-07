import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  template: `
  <h3>CLIENT TESTIMONIALS</h3>
  <div class="testimonials">
    <div class="testimonial">
      <img src="assets/images/icons/image-emily.jpg" alt="">
      <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
      <div>
        <p>Emily R.</p>
        <p>Marketing Director</p>
      </div>
    </div>
    <div class="testimonial">
      <img src="assets/images/icons/image-thomas.jpg" alt="">
      <p>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
      <div>
        <p>Thomas S.</p>
        <p>Chief Operating Officer</p>
      </div>
    </div>
    <div class="testimonial">
      <img src="assets/images/icons/image-jennie.jpg" alt="">
      <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
      <div>
        <p>Jennie F.</p>
        <p>Business Owner</p>
      </div>
    </div>
  </div>
  `,
  styles: [`
  h3 {
    text-align: center;
    margin: 0 0 50px 0;
    color: var(--gray);
    font-family: 'Fraunces', sans-serif;
    letter-spacing: 6px;
  }
  .testimonials {
    display: grid;
    gap: 50px;
  }
  .testimonial {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  .testimonial > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .testimonial > p {
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
  }
  .testimonial > div {
    text-align: center;
    display: grid;
    gap: 10px;
  }
  .testimonial > div > p:first-child {
    font-family: 'Fraunces', sans-serif;
    font-size: 20px;
  }
  .testimonial > div > p:last-child {
    font-family: 'Barlow', sans-serif;
    color: var(--gray);
    font-size: 15px;
    opacity: 0.7;
  }

  /* DESKTOP STYLES */
  .testimonials {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  `]
})
export class TestimonialsComponent {
  constructor() {}
}
