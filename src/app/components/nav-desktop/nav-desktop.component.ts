import { Component, Input } from '@angular/core';

import { SECTION_Y_OFFSET } from 'src/consts';
import { UtilityService } from 'src/app/services';

@Component({
  selector: 'app-nav-desktop',
  templateUrl: './nav-desktop.component.html',
  styleUrls: ['./nav-desktop.component.scss'],
})
export class NavDesktopComponent {
  @Input() isPastOneHundredViewHeight;
  @Input() sectionInView;

  readonly SECTION_Y_OFFSET = SECTION_Y_OFFSET;

  constructor(public utilityService: UtilityService) {}
}
