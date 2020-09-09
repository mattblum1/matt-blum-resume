import { BLACKHAWK_COURSES, MOBILE_WEB_SPECIALIST_COURSES } from 'src/consts';

import { Component } from '@angular/core';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.scss'],
})
export class EducationSectionComponent {
  blackhawkCourses: string[] = BLACKHAWK_COURSES;
  mobileWebSpecialistCourses: string[] = MOBILE_WEB_SPECIALIST_COURSES;
  constructor() {}
}
