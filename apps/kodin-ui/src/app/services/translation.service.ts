import { inject, Injectable } from '@angular/core';
import { TranslateService, TranslateLoader } from '@ngx-translate/core';
import { Subject, map} from 'rxjs';
import {ExportEndPointService} from '@guppy/tiveriad/admin/openapi';
@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private onLanguageChanged = new Subject<string>();
  languageChanged$ = this.onLanguageChanged.asObservable();

  constructor(private translate: TranslateService) {
    this.addLanguages(['en', 'fr', 'de', 'pt', 'ar', 'ko']);
    this.setDefaultLanguage('en');

  }

  addLanguages(lang: string[]) {
    this.translate.addLangs(lang);
  }

  setDefaultLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  getDefaultLanguage() {
    return this.translate.defaultLang;
  }

  getBrowserLanguage() {
    return this.translate.getBrowserLang();
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

  getLoadedLanguages() {
    return this.translate.langs;
  }

  useBrowserLanguage(): string | void {
    const browserLang = this.getBrowserLanguage();

    if (browserLang?.match(/en|fr|de|pt|ar|ko/)) {
      this.changeLanguage(browserLang);
      return browserLang;
    }
  }

  useDefaultLanguage() {
    return this.changeLanguage(null);
  }

  changeLanguage(language: string | null) {
    if (!language) {
      language = this.getDefaultLanguage();
    }

    if (language !== this.translate.currentLang) {
      const lang = language;

      setTimeout(() => {
        this.translate.use(lang);
        this.onLanguageChanged.next(lang);
      });
    }

    return language;
  }

  getTranslation(key: string | Array<string>, interpolateParams?: object) {
    return this.translate.instant(key, interpolateParams);
  }

  getTranslationAsync(key: string | Array<string>, interpolateParams?: object) {
    return this.translate.get(key, interpolateParams);
  }
}

export class TranslateLanguageLoader implements TranslateLoader {
  exportEndPointService = inject(ExportEndPointService);
  public getTranslation(lang: string) {
    console.log('getTranslation', lang);

    const transformedObservable = this.exportEndPointService
    .appsAppIdTermsExportGet("24135a1270d45fe168cb2b85", lang).pipe(
      map(originalArray => {
        return originalArray.reduce((acc:any, { key, value }) => {
          if (key!=null)
            acc[key] = value;
          return acc;
        }, {});
      })
    );

    return transformedObservable;
  }
}
