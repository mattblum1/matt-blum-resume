import { AfterViewInit, Component } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

import { ScrollSpyService } from 'ng-spy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  JPG: string = 'jpg';
  WEBP: string = 'webp';
  SECTION_Y_OFFSET: number = -16;

  isPastOneHundredViewHeight: boolean = false;
  sectionInView: string = '';

  frontEndSkills: Skill[] = [
    { label: 'Angular', rating: 4 },
    { label: 'TypeScript', rating: 4 },
    { label: 'JavaScript', rating: 4 },
    { label: 'NgRx', rating: 4 },
    { label: 'Redux', rating: 4 },
    { label: 'HTML5', rating: 4 },
    { label: 'SCSS/CSS3', rating: 4 },
    { label: 'SEO', rating: 4 },
    { label: 'Responsive Design', rating: 4 },
    // { label: 'React', rating: 1 },
    // { label: 'PHP', rating: 1 },
  ];

  miscSkills: Skill[] = [
    { label: 'C#', rating: 4 },
    { label: 'ASP.NET', rating: 4 },
    { label: 'OOP', rating: 4 },
    { label: 'SQL', rating: 4 },
  ];

  librarySkills: Skill[] = [
    { label: 'Material', rating: 4 },
    { label: 'Bootstrap', rating: 4 },
    { label: 'PrimeNG', rating: 4 },
  ];

  blackhawkCourses: string[] = [
    'JavaScript Programming',
    'Website Development – XHTML/CSS',
    'ASP.NET Programming',
    'Visual Basic .NET Programming',
    'C Programming',
    'Beginning & Advanced PHP Programming',
    'Beginning & Advanced Java Programming',
    'Relational Database Dev. (MySQL)',
  ];

  bullSearchWebAlbum: IAlbum[] = [
    {
      src: '../assets/images/screenshots/webp/bull-search-web.webp',
      caption: 'Bull Search Web - Desktop',
      thumb: '../assets/images/screenshots/webp/bull-search-web-thumb.webp',
    },
    {
      src: '../assets/images/screenshots/webp/bull-search-web-mobile.webp',
      caption: 'Bull Search Web - Mobile',
      thumb:
        '../assets/images/screenshots/webp/bull-search-web-mobile-thumb.webp',
    },
  ];

  acceleratedGeneticsAlbum: IAlbum[] = [
    {
      src: '../assets/images/screenshots/webp/accelerated-genetics.webp',
      caption: 'Accelerated Genetics - Desktop',
      thumb:
        '../assets/images/screenshots/webp/accelerated-genetics-thumb.webp',
    },
    {
      src: '../assets/images/screenshots/webp/accelerated-genetics-mobile.webp',
      caption: 'Accelerated Genetics - Mobile',
      thumb:
        '../assets/images/screenshots/webp/accelerated-genetics-mobile-thumb.webp',
    },
  ];

  sireSearchAlbum: IAlbum[] = [
    {
      src: '../assets/images/screenshots/webp/ag-search.webp',
      caption: 'Sire Search - Desktop',
      thumb: '../assets/images/screenshots/webp/ag-search-thumb.webp',
    },
    {
      src: '../assets/images/screenshots/webp/ag-search-mobile.webp',
      caption: 'Sire Search - Mobile',
      thumb: '../assets/images/screenshots/webp/ag-search-mobile-thumb.webp',
    },
  ];

  shopSearchAlbum: IAlbum[] = [
    {
      src: '../assets/images/screenshots/webp/shop.webp',
      caption: 'Shop - Desktop',
      thumb: '../assets/images/screenshots/webp/shop-thumb.webp',
    },
  ];

  dairySireSearchAlbum: IAlbum[] = [
    {
      src: '../assets/images/screenshots/webp/dairy-sire-selection.webp',
      caption: 'Shop - Desktop',
      thumb:
        '../assets/images/screenshots/webp/dairy-sire-selection-thumb.webp',
    },
  ];

  constructor(
    private spyService: ScrollSpyService,
    private lightbox: Lightbox
  ) {
    this.frontEndSkills = this.sortSkillsByRating(this.frontEndSkills);
    this.librarySkills = this.sortSkillsByRating(this.librarySkills);
    this.miscSkills = this.sortSkillsByRating(this.miscSkills);
  }

  ngAfterViewInit() {
    // Setup SpyService
    this.spyService.spy({ thresholdBottom: 0 });
    this.spyService.activeSpyTarget.subscribe(
      (activeTargetName: string) => (this.sectionInView = activeTargetName)
    );

    // Set isPastOneHundredViewHeight
    window.addEventListener('scroll', () => {
      const oneHundredViewHeight = document.getElementById('landing')
        .offsetHeight;
      const currentPageYOffset = window.pageYOffset;

      this.isPastOneHundredViewHeight =
        currentPageYOffset >= oneHundredViewHeight;
    });

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

  scrollToId(selector: string, yOffset: number = 0): void {
    const el = document.getElementById(selector);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  sortSkillsByRating(skills: Skill[]): Skill[] {
    return skills.sort((a, b) => b.rating - a.rating);
  }

  updateAlbumExtension(album: IAlbum[]): IAlbum[] {
    return album.map((a) => ({
      src: this.replaceAll(a.src, this.WEBP, this.JPG),
      caption: this.replaceAll(a.caption, this.WEBP, this.JPG),
      thumb: this.replaceAll(a.thumb, this.WEBP, this.JPG),
    }));
  }
}

interface Skill {
  label: string;
  rating: number;
}
