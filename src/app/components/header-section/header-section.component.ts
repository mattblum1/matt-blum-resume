import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
})
export class HeaderSectionComponent {
  @Input() title: string = 'Title';
  @Input() titleBlurb: string = 'Title Blurb';

  constructor() {}
}
