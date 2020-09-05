import { AfterViewInit, Component } from '@angular/core';

import { ScrollSpyService } from 'ng-spy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
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

  constructor(private spyService: ScrollSpyService) {
    this.frontEndSkills = this.frontEndSkills.sort(
      (a, b) => b.rating - a.rating
    );
  }

  ngAfterViewInit() {
    // Setup SpyService
    this.spyService.spy({ thresholdBottom: 500 });
    this.spyService.activeSpyTarget.subscribe(
      (activeTargetName: string) => (this.sectionInView = activeTargetName)
    );

    // Set isPastOneHundredViewHeight
    window.addEventListener('scroll', () => {
      const oneHundredViewHeight = document.getElementById('cover')
        .offsetHeight;
      const currentPageYOffset = window.pageYOffset;

      this.isPastOneHundredViewHeight =
        currentPageYOffset >= oneHundredViewHeight;
    });
  }

  // scrollToId(selector: string, offset = 0) {
  //   const el = document.getElementById(selector);
  //   el.scrollIntoView({ behavior: 'smooth' });
  // }

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
