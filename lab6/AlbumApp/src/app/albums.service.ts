import { Injectable } from '@angular/core';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  url = 'http://localhost:3000/albums';
  constructor() {}

  async getAllAlbums() : Promise<Album[]> {
    const data = await fetch(this.url);
    return data.json() ?? [];
  }

  async getAlbumByID(id: number) : Promise<Album> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json() ?? [];
  }

  async getPhotosByID(id: number) : Promise<string[]> {
    const data = await this.getAlbumByID(id);
    const photos = new Array<string>();

    data.photoUrls.forEach((photoUrl:string) => {
      photos.push(photoUrl);
    })
    return photos;
  }
}
