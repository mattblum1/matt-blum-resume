import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'matt-blum-resume';

  skills: Skills[] = [
    { label: 'JavaScript', rating: 5 },
    { label: 'TypeScript', rating: 5 },
    { label: 'Angular', rating: 5 },
    { label: 'React', rating: 1 },
    { label: 'NgRx', rating: 4 },
    { label: 'Redux', rating: 4 },
    { label: 'C#', rating: 5 },
    { label: 'ASP.NET', rating: 5 },
    { label: 'Object Orientated Programming', rating: 5 },
    { label: 'SQL', rating: 5 },
    { label: 'HTML5', rating: 5 },
    { label: 'CSS3', rating: 5 },
    { label: 'Responsive Design', rating: 5 },
    { label: 'SEO', rating: 5 },
    { label: 'JSON', rating: 5 },
    { label: 'Material', rating: 5 },
    { label: 'Bootstrap', rating: 5 },
    { label: 'PrimeNG', rating: 5 },
    { label: 'Scrum', rating: 5 },
  ];

  scrollToId(selector: string) {
    const el = document.getElementById(selector);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  // scrollToId(selector: string, yOffset = -20) {
  //   const el = document.getElementById(selector);
  //   const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //   window.scrollTo({ top: y, behavior: 'smooth' });
  // }
}

interface Skills {
  label: string;
  rating: number;
}
