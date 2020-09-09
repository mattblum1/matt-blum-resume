import { FRONT_END_SKILLS, LIBRARY_SKILLS, MISC_SKILLS } from 'src/consts';

import { Component } from '@angular/core';
import { Skill } from 'src/models';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent {
  frontEndSkills: Skill[] = FRONT_END_SKILLS;
  miscSkills: Skill[] = MISC_SKILLS;
  librarySkills: Skill[] = LIBRARY_SKILLS;

  constructor() {
    this.frontEndSkills = this.sortSkillsByRating(this.frontEndSkills);
    this.librarySkills = this.sortSkillsByRating(this.librarySkills);
    this.miscSkills = this.sortSkillsByRating(this.miscSkills);
  }

  sortSkillsByRating(skills: Skill[]): Skill[] {
    return skills.sort((a, b) => b.rating - a.rating);
  }
}
