import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  albumService: AlbumsService = inject(AlbumsService);
  album: Album | undefined;
  photoUrls: string[] | undefined;

  constructor() {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.albumService.getAlbumByID(id).then(album => {
      this.album = album;
    });

    this.albumService.getPhotosByID(id).then(photosUrls => {
      this.photoUrls = photosUrls;
    });
  }
}
