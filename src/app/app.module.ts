import { AnimateModule } from '@wizdm/animate';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LightboxModule } from 'ngx-lightbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NavDesktopComponent } from './components/nav-desktop/nav-desktop.component';
import { NavMobileComponent } from './components/nav-mobile/nav-mobile.component';
import { NgModule } from '@angular/core';
import { ScrollSpyModule } from 'ng-spy';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { UtilityService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    SectionHeaderComponent,
    NavMobileComponent,
    NavDesktopComponent,
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
