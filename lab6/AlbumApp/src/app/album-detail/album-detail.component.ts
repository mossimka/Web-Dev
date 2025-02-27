import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  albumService: AlbumsService = inject(AlbumsService);
  album: Album | undefined;
  newAlbumName: string = '';
  isPopupVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumByID(id).subscribe(album => {
      this.album = album;
    });
  }


  showPopup() {
    this.isPopupVisible = true;
  }
  closePopup() {
    this.isPopupVisible = false;
  }

  changeAlbum() {
    if (this.album && this.newAlbumName.trim()) {
      this.albumService.updateAlbum(this.album.id, this.newAlbumName).subscribe(updatedAlbum => {
        this.album = updatedAlbum;
        this.newAlbumName = '';
        this.isPopupVisible = false;
      });
    }
  }
}
