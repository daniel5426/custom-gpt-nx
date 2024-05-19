import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AutoLoginPartialRoutesGuard } from 'angular-auth-oidc-client';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'app/home' },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/topics',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/referenceItems/features').then(cpx=>cpx.ReferenceItemSearchlistComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/levels',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/referenceItems/features').then(cpx=>cpx.ReferenceItemSearchlistComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/skills',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/referenceItems/features').then(cpx=>cpx.ReferenceItemSearchlistComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/languages',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/referenceItems/features').then(cpx=>cpx.ReferenceItemSearchlistComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/programmingLanguages',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/referenceItems/features').then(cpx=>cpx.ReferenceItemSearchlistComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/developmentEnvironments',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/referenceItems/features').then(cpx=>cpx.ReferenceItemSearchlistComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/questionCategories',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/referenceItems/features').then(cpx=>cpx.ReferenceItemSearchlistComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/reviewItemCategories',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/referenceItems/features').then(cpx=>cpx.ReferenceItemSearchlistComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/userProfile',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/identities/userProfile/features').then(cpx=>cpx.UserProfileDetailsComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/challengeDefinitions',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/kodin/challengeDefinitions/features').then(cpx=>cpx.ChallengeDefinitionSearchlistComponent) },
  { canActivate: [AutoLoginPartialRoutesGuard ], path: 'app/dashboard',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))], loadComponent: () => import('@guppy/dashboards/features').then(cpx=>cpx.DashboardComponent) },
  { path: 'app/home',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))],  loadComponent: () => import('@guppy/layout/layout-features').then(m => m.HomePageComponent) },
  { path: 'app/error',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))],  loadComponent: () => import('@guppy/layout/layout-features').then(m => m.ErrorPageComponent) },
  { path: 'app/accessdenied',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))],  loadComponent: () => import('@guppy/layout/layout-features').then(m => m.AccessDeniedPageComponent) },
  { path: 'app/signout',providers: [ MessageService, importProvidersFrom(TranslateModule.forChild({ extend: true }))],  loadComponent: () => import('@guppy/layout/layout-features').then(m => m.SignOutPageComponent) }
];
