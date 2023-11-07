import { Component } from '@angular/core';

@Component({
  selector: 'app-bottom-images',
  template: `
  <picture>
    <source srcset="assets/images/desktop/image-gallery-milkbottles.jpg" media="(min-width: 1281px)" />
    <img src="assets/images/mobile/image-gallery-milkbottles.jpg" alt="" />
  </picture>
  <picture>
    <source srcset="assets/images/desktop/image-gallery-orange.jpg" media="(min-width: 1281px)" />
    <img src="assets/images/mobile/image-gallery-orange.jpg" alt="" />
  </picture>
  <picture>
    <source srcset="assets/images/desktop/image-gallery-cone.jpg" media="(min-width: 1281px)" />
    <img src="assets/images/mobile/image-gallery-cone.jpg" alt="" />
  </picture>
  <picture>
    <source srcset="assets/images/desktop/image-gallery-sugarcubes.jpg" media="(min-width: 1281px)" />
    <img src="assets/images/mobile/image-gallery-sugar-cubes.jpg" alt="" />
  </picture>
  `,
  styles: [`
  img {
    width: 100%;
    height: 100%;
  }
  `]
})
export class BottomImagesComponent {

}
