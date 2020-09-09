import { Component } from '@angular/core';
import { ScrollSpyService } from 'ng-spy';
import { UtilityService } from '../../services';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(
    private spyService: ScrollSpyService,
    public utilityService: UtilityService
  ) {}
}
