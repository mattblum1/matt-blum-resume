import { Component, Input } from '@angular/core';

import { UtilityService } from 'src/app/services';

@Component({
  selector: 'app-nav-to-top',
  templateUrl: './nav-to-top.component.html',
  styleUrls: ['./nav-to-top.component.scss'],
})
export class NavToTopComponent {
  @Input() isPastOneHundredViewHeight;

  constructor(public utilityService: UtilityService) {}
}
