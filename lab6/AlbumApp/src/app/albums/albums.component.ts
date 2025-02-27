import { Component, OnInit, inject } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgForOf, RouterLink, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  albumService: AlbumsService = inject(AlbumsService);
  isPopupVisible = false;
  newAlbumName = '';

  constructor() {}

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  showPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  createAlbum() {
    if (this.newAlbumName.trim()) {
      this.albumService.createAlbum(this.newAlbumName).subscribe((newAlbum) => {
        this.albums.push(newAlbum);
      });

      this.newAlbumName = '';
      this.isPopupVisible = false;
    }
  }
  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
