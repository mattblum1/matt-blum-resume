import {
  ACCELERATED_GENETICS_ALBUM,
  BLACKHAWK_COURSES,
  BULL_SEARCH_WEB_ALBUM,
  DAIRY_SIRE_SEARCH_ALBUM,
  FRONT_END_SKILLS,
  JPG,
  LIBRARY_SKILLS,
  MISC_SKILLS,
  SECTION_Y_OFFSET,
  SHOP_SEARCH_ALBUM,
  SIRE_SEARCH_ALBUM,
  WEBP,
} from '../consts';
import { AfterViewInit, Component } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

import { MOBILE_WEB_SPECIALIST_COURSES } from 'src/consts/courses';
import { ScrollSpyService } from 'ng-spy';
import { Skill } from '../models';
import { UtilityService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  readonly SECTION_Y_OFFSET = SECTION_Y_OFFSET;

  isPastOneHundredViewHeight: boolean = false;
  sectionInView: string = '';

  // Skills
  frontEndSkills: Skill[] = FRONT_END_SKILLS;
  miscSkills: Skill[] = MISC_SKILLS;
  librarySkills: Skill[] = LIBRARY_SKILLS;

  // Courses
  blackhawkCourses: string[] = BLACKHAWK_COURSES;
  mobileWebSpecialistCourses: string[] = MOBILE_WEB_SPECIALIST_COURSES;

  // Albums
  bullSearchWebAlbum: IAlbum[] = BULL_SEARCH_WEB_ALBUM;
  acceleratedGeneticsAlbum: IAlbum[] = ACCELERATED_GENETICS_ALBUM;
  sireSearchAlbum: IAlbum[] = SIRE_SEARCH_ALBUM;
  shopSearchAlbum: IAlbum[] = SHOP_SEARCH_ALBUM;
  dairySireSearchAlbum: IAlbum[] = DAIRY_SIRE_SEARCH_ALBUM;

  constructor(
    private spyService: ScrollSpyService,
    private lightbox: Lightbox,
    public utilityService: UtilityService
  ) {
    this.frontEndSkills = this.sortSkillsByRating(this.frontEndSkills);
    this.librarySkills = this.sortSkillsByRating(this.librarySkills);
    this.miscSkills = this.sortSkillsByRating(this.miscSkills);
  }

  ngAfterViewInit() {
    this.setIsPastOneHundredViewHeight();
    this.setupSpyService();

    // Update albums if browser does not support WEBP
    const element = document.querySelector('html');
    const doesSupportWebp: boolean = element.classList.contains('webp');

    if (!doesSupportWebp) {
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

  closeAlbum(): void {
    this.lightbox.close();
  }

  openAlbum(album: IAlbum[], index: number): void {
    this.lightbox.open(album, index);
  }

  replaceAll(str: string, find: string, replace: string) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  setupSpyService(): void {
    this.spyService.spy({ thresholdBottom: 0 });
    this.spyService.activeSpyTarget.subscribe(
      (activeTargetName: string) => (this.sectionInView = activeTargetName)
    );
  }

  setIsPastOneHundredViewHeight(): void {
    window.addEventListener('scroll', () => {
      const oneHundredViewHeight = document.getElementById('landing')
        .offsetHeight;
      const currentPageYOffset = window.pageYOffset;

      this.isPastOneHundredViewHeight =
        currentPageYOffset >= oneHundredViewHeight;
    });
  }

  sortSkillsByRating(skills: Skill[]): Skill[] {
    return skills.sort((a, b) => b.rating - a.rating);
  }

  updateAlbumExtension(album: IAlbum[]): IAlbum[] {
    return album.map((a) => ({
      src: this.replaceAll(a.src, WEBP, JPG),
      caption: this.replaceAll(a.caption, WEBP, JPG),
      thumb: this.replaceAll(a.thumb, WEBP, JPG),
    }));
  }
}
