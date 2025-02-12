import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MusicsService } from '../musics.service';
import { Product } from '../product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="details">
    <button class="primary" [routerLink]="['/']">←Return</button>
      <section class="photos">
        <div class="details-photo">
          <img [src]="product?.photo">
        </div>
        <div class="details-subphotos" *ngIf="product?.subPhotos?.length">
          <div class="sub-photo" [style.background-image]="'url(' + product?.subPhotos?.[0] + ')'"></div>
          <div class="sub-photo" [style.background-image]="'url(' + product?.subPhotos?.[1] + ')'"></div>
        </div>
      </section>
      <section class="details-info">
        <h1 class="details-name">{{product?.name}} - {{product?.price}}₸ - ☆ {{product?.rating}}</h1>
        <h2 class="details-description-heading">Description</h2>
        <p class="description-p">{{product?.description}}</p>
        <div class="details-small">
          <p>Type: {{product?.type}}</p>
          <p>Country: {{product?.country}}</p>
          <p>Available units: {{product?.availableUnits}}</p>
        </div>
        <h3>Share:</h3>
        <div class="details-share">
          <a class="telegram" [href]="product?.telegram" target="_blank"></a>
          <a class="whatsapp" [href]="product?.whatsapp" target="_blank"></a>
        </div>
      </section>
    </div>
  `,
  styleUrl: `details.css`
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  musicsService = inject(MusicsService);
  product: Product | undefined;

  constructor() {
    const musicItemsId = Number(this.route.snapshot.params['id']);
    this.musicsService.getProductById(musicItemsId).then(product => {
      this.product = product;
    });
  }
}
