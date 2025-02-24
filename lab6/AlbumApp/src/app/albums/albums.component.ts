import { Component, OnInit, inject } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [NgForOf, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  albumService: AlbumsService = inject(AlbumsService);

  constructor() {}

  ngOnInit(): void {
    this.albumService.getAllAlbums().then((albums: Album[]) => {
      this.albums = albums;
    });
  }
}
