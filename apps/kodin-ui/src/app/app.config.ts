import { ApplicationConfig, importProvidersFrom, inject } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { layoutReducer,LayoutEffects } from '@guppy/layout/layout-state';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ReferenceItemEffects, referenceItemReducer } from '@guppy/referenceItems/state';
import { ReferenceItemApiConfiguration, ReferenceItemApiConfigurationParameters, ReferenceItemApiModule } from '@guppy/referenceItems/openapi';
import { MessageService } from 'primeng/api';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLanguageLoader } from './services/translation.service';
import { KodinApiConfiguration, KodinApiConfigurationParameters, KodinApiModule } from '@guppy/kodin/openapi';
import { AdminApiConfiguration, AdminApiConfigurationParameters, AdminApiModule } from '@guppy/tiveriad/admin/openapi';
import { challengeDefinitionReducer } from '@guppy/kodin/challengeDefinitions/state';
import { UserProfileEffects, userProfileReducer } from '@guppy/identities/userProfile/state';
import { IdentitiesApiConfiguration, IdentitiesApiConfigurationParameters, IdentitiesApiModule } from '@guppy/identities/openapi';
import { LogLevel, authInterceptor, provideAuth } from 'angular-auth-oidc-client';
import { ShareDataModule } from '@guppy/tiveriad/ui';
import { shareDataServiceConfigurations } from './shareData/shareData.config';





export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor()])),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAuth({
      config: {
        authority: 'http://62.210.5.206:8080/openid',
        triggerAuthorizationResultEvent: true,
        forbiddenRoute: 'app/accessdenied',
        unauthorizedRoute: 'app/accessdenied',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: 'KODIN_UI',
        scope: 'openid profile email api roles api',
        responseType: 'code',
        startCheckSession: false,
        silentRenew: false,
        useRefreshToken: false,
        logLevel: LogLevel.Debug,
        historyCleanupOff: true,
      },
    }),
    provideStore({
      referenceItemComponentState : referenceItemReducer,
      layout: layoutReducer,
      challengeDefinitionComponentState : challengeDefinitionReducer,
      userProfileComponentState : userProfileReducer
    }),
    importProvidersFrom([
      ShareDataModule.forRoot(shareDataServiceConfigurations),
      ReferenceItemApiModule.forRoot(referenceItemApiConfigurationFactory),
      KodinApiModule.forRoot(kodinApiConfigurationFactory),
      IdentitiesApiModule.forRoot(identitiesApiConfigurationFactory),
      AdminApiModule.forRoot(adminApiConfigurationFactory),
      MessageService,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: TranslateLanguageLoader,
        },
      }),
    ]),
    provideEffects([LayoutEffects, ReferenceItemEffects, UserProfileEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideAnimations(),
    provideHttpClient(withInterceptors([authInterceptor()]))
  ],
};

export function referenceItemApiConfigurationFactory(): ReferenceItemApiConfiguration {
  const params: ReferenceItemApiConfigurationParameters = {
    basePath: "http://62.210.5.206:8080/api/referenceItems",
  };
  return new ReferenceItemApiConfiguration(params);
}

export function kodinApiConfigurationFactory(): KodinApiConfiguration {
  const params: KodinApiConfigurationParameters = {
    basePath: "http://62.210.5.206:8080/api/kodin",
  };
  return new KodinApiConfiguration(params);
}

export function identitiesApiConfigurationFactory(): IdentitiesApiConfiguration {
  const params: IdentitiesApiConfigurationParameters = {
    basePath: "http://62.210.5.206:8080/api/identities",
  };
  return new IdentitiesApiConfiguration(params);
}

export function adminApiConfigurationFactory(): AdminApiConfiguration {
  const params: AdminApiConfigurationParameters = {
    basePath: "http://62.210.5.206:8080/api/admin",
  };
  return new AdminApiConfiguration(params);
}



