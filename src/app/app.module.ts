import { AnimateModule } from '@wizdm/animate';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { ScrollSpyModule } from 'ng-spy';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

@NgModule({
  declarations: [AppComponent, SectionHeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    AnimateModule,
    ScrollSpyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
