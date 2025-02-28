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
  newAlbumDescription = '';
  newAlbumPhotos:number = 1;
  newAlbumImages:string[] = [];

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
    this.newAlbumName = '';
    this.newAlbumDescription = '';
    this.newAlbumPhotos = 1;
    this.newAlbumImages = [];
  }

  createAlbum() {
    if (this.newAlbumName.trim() && this.newAlbumDescription.trim() && this.newAlbumImages.length > 0) {
      const newAlbum: Album = {
        id: Math.floor(Math.random() * 1000), // Dummy ID (should be handled by the backend)
        title: this.newAlbumName,
        description: this.newAlbumDescription,
        photoUrls: this.newAlbumImages
      };

      this.albumService.createAlbum(newAlbum).subscribe((createdAlbum) => {
        this.albums.push(createdAlbum);
      });

      this.closePopup();
    }
  }
  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}
