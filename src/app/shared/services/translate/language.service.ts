import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesE } from 'src/assets/i18n/config/language.config';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private translateService: TranslateService) {}

  public setDefaultLang(lang: LanguagesE = LanguagesE.ENGLISH): void {
    this.translateService.setDefaultLang(lang);
  }

  public switchLanguage(lang: LanguagesE): void {
    this.translateService.use(lang);
  }
}
