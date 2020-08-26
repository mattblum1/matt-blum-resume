import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'matt-blum-resume';

  scrollToId(id: string) {
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
