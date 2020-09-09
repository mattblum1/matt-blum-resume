import {
  ACCELERATED_GENETICS_ALBUM,
  BULL_SEARCH_WEB_ALBUM,
  DAIRY_SIRE_SEARCH_ALBUM,
  JPG,
  SHOP_SEARCH_ALBUM,
  SIRE_SEARCH_ALBUM,
  WEBP,
} from 'src/consts';
import { IAlbum, Lightbox } from 'ngx-lightbox';

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent {
  bullSearchWebAlbum: IAlbum[] = BULL_SEARCH_WEB_ALBUM;
  acceleratedGeneticsAlbum: IAlbum[] = ACCELERATED_GENETICS_ALBUM;
  sireSearchAlbum: IAlbum[] = SIRE_SEARCH_ALBUM;
  shopSearchAlbum: IAlbum[] = SHOP_SEARCH_ALBUM;
  dairySireSearchAlbum: IAlbum[] = DAIRY_SIRE_SEARCH_ALBUM;

  constructor(private lightbox: Lightbox) {
    // Update albums if browser does not support WEBP
    const element = document.querySelector('html');
    const doesSupportWebp: boolean = element.classList.contains('webp');

    if (!doesSupportWebp) {
      this.updateAllAlbumExtensions();
    }
  }

  closeAlbum(): void {
    this.lightbox.close();
  }

  openAlbum(album: IAlbum[], index: number): void {
    this.lightbox.open(album, index);
  }

  replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  updateAlbumExtension(album: IAlbum[]): IAlbum[] {
    return album.map((a) => ({
      src: this.replaceAll(a.src, WEBP, JPG),
      caption: this.replaceAll(a.caption, WEBP, JPG),
      thumb: this.replaceAll(a.thumb, WEBP, JPG),
    }));
  }

  updateAllAlbumExtensions(): void {
    this.bullSearchWebAlbum = this.updateAlbumExtension(
      this.bullSearchWebAlbum
    );
    this.acceleratedGeneticsAlbum = this.updateAlbumExtension(
      this.acceleratedGeneticsAlbum
    );
    this.sireSearchAlbum = this.updateAlbumExtension(this.sireSearchAlbum);
    this.shopSearchAlbum = this.updateAlbumExtension(this.shopSearchAlbum);
    this.dairySireSearchAlbum = this.updateAlbumExtension(
      this.dairySireSearchAlbum
    );
  }
}
