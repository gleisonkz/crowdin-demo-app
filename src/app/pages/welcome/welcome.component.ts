import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  title = 'Welcome to the CWD';

  siteLanguage = 'English';
  selectedLang: string;

  langs = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pt-BR', label: 'Português' },
  ];

  constructor(private service: TranslocoService) {
    const activeLang = this.service.getActiveLang();
    this.selectedLang = activeLang;
  }

  changeLang(language: string): void {
    this.service.setActiveLang(language);
    this.siteLanguage = this.langs.find((f) => f.code === language)?.label!;
  }
}
