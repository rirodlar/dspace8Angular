import { Route } from '@angular/router';

import { i18nBreadcrumbResolver } from '../core/breadcrumbs/i18n-breadcrumb.resolver';
import { endUserAgreementCurrentUserGuard } from '../core/end-user-agreement/end-user-agreement-current-user.guard';
import { exploreI18nBreadcrumbResolver } from './explore-i18n-breadcrumb.resolver';
import { ExplorePageComponent } from './explore-page.component';
import { ResearcherProfilesSearchComponent } from './researcher-profiles-search/researcher-profiles-search.component';

export const ROUTES: Route[] = [
  {
    path: 'researcherprofiles',
    component: ResearcherProfilesSearchComponent,
    resolve: { breadcrumb: i18nBreadcrumbResolver },
    data: { title: 'explore.title', breadcrumbKey: 'explore.researcherprofiles', showSocialButtons: true },
    canActivate: [endUserAgreementCurrentUserGuard],
  },
  {
    path: ':id',
    component: ExplorePageComponent,
    resolve: { breadcrumb: exploreI18nBreadcrumbResolver },
    data: { title: 'explore.title', breadcrumbKey: 'explore', showSocialButtons: true },
    canActivate: [endUserAgreementCurrentUserGuard],
  },
];
