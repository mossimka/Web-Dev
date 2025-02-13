import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { RouterModule } from '@angular/router';
import { MusicsService } from '../musics.service';

@Component({
  selector: 'app-shop-items',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <div class="listing-photo-frame">
        <img class="listing-photo" [src]="product.photo" alt="Photo of: {{ product.name }}">
        <div class="likes" (click)="like()"><img src="/assets/like-icon.png"> {{product.likes}}</div>
      </div>
      <div class="listing-info">
        <h2 class="listing-heading"> {{ product.name }} </h2>
        <h3>☆ {{product.rating}}</h3>
        <p class="lisitng-price"> {{ product.price }} ₸ </p>
        <button class="primary" [routerLink]="['/details', product.id]">View Details</button>
      </div>
    </section>
  `,
  styleUrl: `./shop-items.css`,
})
export class ShopItemsComponent {
  @Input() product!:Product;
  private musicService: MusicsService = inject(MusicsService);

  like(){
    this.product.likes++;
  }
}
