import { AnimateModule } from '@wizdm/animate';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CareerSectionComponent } from './components/career-section/career-section.component';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { LandingComponent } from './components/landing/landing.component';
import { LightboxModule } from 'ngx-lightbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavDesktopComponent } from './components/nav-desktop/nav-desktop.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';
import { NavToTopComponent } from './components/nav-to-top/nav-to-top.component';
import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ScrollSpyModule } from 'ng-spy';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { UtilityService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    NavMobileComponent,
    NavDesktopComponent,
    LandingComponent,
    PageHeaderComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    CareerSectionComponent,
    EducationSectionComponent,
    ResumeComponent,
    FooterComponent,
    NavToTopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    AnimateModule,
    ScrollSpyModule,
    LightboxModule,
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent],
})
export class AppModule {}
