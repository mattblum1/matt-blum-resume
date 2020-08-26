import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'matt-blum-resume';

  // scrollToId(id: string) {
  //   const el = document.getElementById(id);
  //   el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }

  scrollToId(selector: string, yOffset = -20) {
    console.warn('selector', selector);
    const el = document.getElementById(selector);
    console.warn('el', el);
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
