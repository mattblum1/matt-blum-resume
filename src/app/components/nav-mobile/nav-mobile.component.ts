import { Component, Input } from '@angular/core';

import { SECTION_Y_OFFSET } from 'src/consts';
import { UtilityService } from 'src/app/services';

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss'],
})
export class NavMobileComponent {
  @Input() isPastOneHundredViewHeight;
  @Input() sectionInView;

  readonly SECTION_Y_OFFSET = SECTION_Y_OFFSET;

  constructor(public utilityService: UtilityService) {}
}
