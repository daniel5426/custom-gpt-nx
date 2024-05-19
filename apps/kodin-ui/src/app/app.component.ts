import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import { TranslationService } from './services/translation.service';
import { PrimeNGConfig } from 'primeng/api';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent, SidebarComponent, TopbarComponent, ProfileSidebarComponent } from '@guppy/layout/layout-features'



import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Store, select } from '@ngrx/store';
import { LayoutState, selectLayoutState } from '@guppy/layout/layout-state';
import { Observable } from 'rxjs';
import { TranslationService} from './services/translation.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';



@Component({
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StoreModule,
    EffectsModule,
    BreadcrumbComponent,
    SidebarComponent,
    TopbarComponent,
    ProfileSidebarComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  layoutState$: Observable<LayoutState>;
  menuBarVisible=true;
  constructor(
    private primengConfig: PrimeNGConfig,
    private translationService: TranslationService,
    private store: Store,
    public oidcSecurityService: OidcSecurityService
    // private messageService: MessageService
    //private translationService: TranslationService
  ) {

    this.layoutState$ = this.store.pipe(select(selectLayoutState));
    this.layoutState$.subscribe((data) => {
      this.menuBarVisible = data.menuBarVisible;
    });
  }
  title = 'kodin-ui';
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = `12px`;
    this.translationService.addLanguages(['en', 'fr']);
    this.translationService.setDefaultLanguage('fr');
    this.oidcSecurityService
    .checkAuth()
    .subscribe(({ isAuthenticated, accessToken }) => {
      console.log('app authenticated', isAuthenticated);
    });
  }

  get containerClass() {
    return {
      'layout-light': true,
      'layout-colorscheme-menu':true,
      'layout-static': true,
      'layout-static-inactive': !this.menuBarVisible,
      'layout-overlay-active': this.menuBarVisible,
      'layout-sidebar-active':this.menuBarVisible,
      'p-ripple-disabled':false,
      'p-input-filled':true
    };
  }
}
1
