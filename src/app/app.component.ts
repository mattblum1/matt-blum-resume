import { AfterViewInit, Component } from '@angular/core';
import { IAlbum, Lightbox } from 'ngx-lightbox';

import { ScrollSpyService } from 'ng-spy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  SECTION_Y_OFFSET: number = -20;

  isPastOneHundredViewHeight: boolean = false;
  sectionInView: string = '';

  frontEndSkills: Skill[] = [
    { label: 'Angular', rating: 5 },
    { label: 'TypeScript', rating: 5 },
    { label: 'JavaScript', rating: 4 },
    { label: 'NgRx', rating: 4 },
    { label: 'Redux', rating: 4 },
    { label: 'HTML5', rating: 5 },
    { label: 'SCSS/CSS3', rating: 5 },
    { label: 'SEO', rating: 4 },
    { label: 'Responsive Design', rating: 5 },
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
    { label: 'Material', rating: 5 },
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
      src: '../assets/images/screenshots/bull-search-web.webp',
      caption: 'Bull Search Web - Desktop',
      thumb: '../assets/images/screenshots/bull-search-web-thumb.webp',
    },
    {
      src: '../assets/images/screenshots/bull-search-web-mobile.webp',
      caption: 'Bull Search Web - Mobile',
      thumb: '../assets/images/screenshots/bull-search-web-mobile-thumb.webp',
    },
  ];

  acceleratedGeneticsAlbum: IAlbum[] = [
    {
      src: '../assets/images/screenshots/accelerated-genetics.webp',
      caption: 'Accelerated Genetics - Desktop',
      thumb: '../assets/images/screenshots/accelerated-genetics-thumb.webp',
    },
    {
      src: '../assets/images/screenshots/accelerated-genetics-mobile.webp',
      caption: 'Accelerated Genetics - Mobile',
      thumb:
        '../assets/images/screenshots/accelerated-genetics-mobile-thumb.webp',
    },
  ];

  sireSearchAlbum: IAlbum[] = [
    {
      src: '../assets/images/screenshots/ag-search.webp',
      caption: 'Sire Search - Desktop',
      thumb: '../assets/images/screenshots/ag-search-thumb.webp',
    },
    {
      src: '../assets/images/screenshots/ag-search-mobile.webp',
      caption: 'Sire Search - Mobile',
      thumb: '../assets/images/screenshots/ag-search-mobile-thumb.webp',
    },
  ];

  shopSearchAlbum: IAlbum[] = [
    {
      src: '../assets/images/screenshots/shop.webp',
      caption: 'Shop - Desktop',
      thumb: '../assets/images/screenshots/shop-thumb.webp',
    },
  ];

  dairySireSearchAlbum: IAlbum[] = [
    {
      src: '../assets/images/screenshots/dairy-sire-selection.webp',
      caption: 'Shop - Desktop',
      thumb: '../assets/images/screenshots/dairy-sire-selection-thumb.webp',
    },
  ];

  constructor(
    private spyService: ScrollSpyService,
    private lightbox: Lightbox
  ) {
    this.frontEndSkills = this.frontEndSkills.sort(
      (a, b) => b.rating - a.rating
    );
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
  }

  openAlbum(album: IAlbum[], index: number): void {
    this.lightbox.open(album, index);
  }

  closeAlbum(): void {
    this.lightbox.close();
  }

  scrollToId(selector: string, yOffset: number = 0) {
    const el = document.getElementById(selector);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

interface Skill {
  label: string;
  rating: number;
}
