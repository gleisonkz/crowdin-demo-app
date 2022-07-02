import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  title = 'Welcome to the CWD';

  ngOnInit() {}

  siteLanguage = 'English';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'pt-BR', label: 'Português' },
  ];

  constructor(private service: TranslocoService) {}

  changeSiteLanguage(language: string): void {
    this.service.setActiveLang(language);
    this.siteLanguage = this.languageList.find(
      (f) => f.code === language
    )?.label!;
  }
}
