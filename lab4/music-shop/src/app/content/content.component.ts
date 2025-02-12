  import { Component, inject } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { Product } from '../product';
  import { ShopItemsComponent } from '../shop-items/shop-items.component';
  import { MusicsService } from '../musics.service';
import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-content',
    imports: [ShopItemsComponent, CommonModule, FormsModule],
    template: `
      <section class="search">
        <form>
          <input class="input-place" type="text" placeholder="Filter by name" [(ngModel)]="filter">
          <button class="primary" type="button" (click)="filterResults(filter)">Search</button>
        </form>
      </section>
      <section class="results">
          <div *ngFor="let product of filteredProductsList">
            <app-shop-items [product]="product"></app-shop-items>
          </div>
      </section>
    `,
    styleUrl: `./content.css`,
  })
  export class ContentComponent {
    productsList: Product[] = [];
    musicService: MusicsService = inject(MusicsService);
    filteredProductsList: Product[] = [];
    filter: string;

    constructor() {
      this.musicService.getAllProducts().then((productsList: Product[]) => {
        this.productsList = productsList;
        this.filteredProductsList = productsList;
      });
      this.filter = '';
    }

    filterResults(text:string) {
      if (!text) {
        this.filteredProductsList = this.productsList;
        return;
      }
  
      this.filteredProductsList = this.productsList.filter(product =>
        product?.name.toLowerCase().includes(text.toLowerCase())
      );
      this.filter = '';
    }
  }

  