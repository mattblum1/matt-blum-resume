import { AfterViewInit, Component } from '@angular/core';

import { SECTION_Y_OFFSET } from '../../../consts';
import { ScrollSpyService } from 'ng-spy';
import { UtilityService } from '../../services';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements AfterViewInit {
  readonly SECTION_Y_OFFSET = SECTION_Y_OFFSET;

  isPastOneHundredViewHeight: boolean = false;
  sectionInView: string = '';

  constructor(
    private spyService: ScrollSpyService,
    public utilityService: UtilityService
  ) {}

  ngAfterViewInit() {
    this.setIsPastOneHundredViewHeight();
    this.setupSpyService();

    // Update albums if browser does not support WEBP
    const element = document.querySelector('html');
    const doesSupportWebp: boolean = element.classList.contains('webp');
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
}
