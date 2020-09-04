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

  skills: Skills[] = [
    { label: 'JavaScript', rating: 5 },
    { label: 'TypeScript', rating: 5 },
    { label: 'Angular', rating: 5 },
    { label: 'React', rating: 1 },
    { label: 'NgRx', rating: 4 },
    { label: 'Redux', rating: 4 },
    { label: 'C#', rating: 5 },
    { label: 'ASP.NET', rating: 5 },
    { label: 'Object Orientated Programming', rating: 5 },
    { label: 'SQL', rating: 5 },
    { label: 'HTML5', rating: 5 },
    { label: 'CSS3', rating: 5 },
    { label: 'Responsive Design', rating: 5 },
    { label: 'SEO', rating: 5 },
    { label: 'JSON', rating: 5 },
    { label: 'Material', rating: 5 },
    { label: 'Bootstrap', rating: 5 },
    { label: 'PrimeNG', rating: 5 },
    { label: 'Scrum', rating: 5 },
  ];

  constructor(private spyService: ScrollSpyService) {}

  ngAfterViewInit() {
    // Setup SpyService
    this.spyService.spy({ thresholdBottom: 500 });
    this.spyService.activeSpyTarget.subscribe((activeTargetName: string) => {
      this.sectionInView = activeTargetName;
      console.log(activeTargetName);
    });

    // Set isPastOneHundredViewHeight
    window.addEventListener('scroll', () => {
      const oneHundredViewHeight = document.getElementById('cover')
        .offsetHeight;
      const currentPageYOffset = window.pageYOffset;

      this.isPastOneHundredViewHeight =
        currentPageYOffset >= oneHundredViewHeight;
    });
  }

  scrollToId(selector: string) {
    const el = document.getElementById(selector);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  // scrollToId(selector: string, yOffset = -20) {
  //   const el = document.getElementById(selector);
  //   const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //   window.scrollTo({ top: y, behavior: 'smooth' });
  // }
}

interface Skills {
  label: string;
  rating: number;
}
