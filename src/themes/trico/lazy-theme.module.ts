import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { RegisterEmailFormModule } from '../../app/register-email-form/register-email-form.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { RootModule } from '../../app/root.module';
import { FileSectionComponent } from './app/item-page/simple/field-components/file-section/file-section.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { RootComponent } from './app/root/root.component';
import { CommunityListPageComponent } from './app/community-list-page/community-list-page.component';
import { SearchPageComponent } from './app/search-page/search-page.component';
import { ConfigurationSearchPageComponent } from './app/search-page/configuration-search-page.component';
import { EndUserAgreementComponent } from './app/info/end-user-agreement/end-user-agreement.component';
import { PageNotFoundComponent } from './app/pagenotfound/pagenotfound.component';
import { ObjectNotFoundComponent } from './app/lookup-by-id/objectnotfound/objectnotfound.component';
import { ForbiddenComponent } from './app/forbidden/forbidden.component';
import { PrivacyComponent } from './app/info/privacy/privacy.component';
import {
  CollectionStatisticsPageComponent
} from './app/statistics-page/collection-statistics-page/collection-statistics-page.component';
import {
  CommunityStatisticsPageComponent
} from './app/statistics-page/community-statistics-page/community-statistics-page.component';
import { ItemStatisticsPageComponent } from './app/statistics-page/item-statistics-page/item-statistics-page.component';
import { SiteStatisticsPageComponent } from './app/statistics-page/site-statistics-page/site-statistics-page.component';
import { CommunityPageComponent } from './app/community-page/community-page.component';
import { CollectionPageComponent } from './app/collection-page/collection-page.component';
import { ItemPageComponent } from './app/item-page/simple/item-page.component';
import { FullItemPageComponent } from './app/item-page/full/full-item-page.component';
import { LoginPageComponent } from './app/login-page/login-page.component';
import { LogoutPageComponent } from './app/logout-page/logout-page.component';
import { CreateProfileComponent } from './app/register-page/create-profile/create-profile.component';
import { ForgotEmailComponent } from './app/forgot-password/forgot-password-email/forgot-email.component';
import { ForgotPasswordFormComponent } from './app/forgot-password/forgot-password-form/forgot-password-form.component';
import { ProfilePageComponent } from './app/profile-page/profile-page.component';
import { RegisterEmailComponent } from './app/register-page/register-email/register-email.component';
import { MyDSpacePageComponent } from './app/my-dspace-page/my-dspace-page.component';
import { WorkflowItemDeleteComponent
} from './app/workflowitems-edit-page/workflow-item-delete/workflow-item-delete.component';
import {
  WorkflowItemSendBackComponent
} from './app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component';
import { BreadcrumbsComponent } from './app/breadcrumbs/breadcrumbs.component';
import { FeedbackComponent } from './app/info/feedback/feedback.component';
import { CommunityListComponent } from './app/community-list-page/community-list/community-list.component';

import { AuthNavMenuComponent } from './app/shared/auth-nav-menu/auth-nav-menu.component';
import {
  ExpandableNavbarSectionComponent
} from './app/navbar/expandable-navbar-section/expandable-navbar-section.component';
import {
  EditItemTemplatePageComponent
} from './app/collection-page/edit-item-template-page/edit-item-template-page.component';
import { LoadingComponent } from './app/shared/loading/loading.component';
import { SearchResultsComponent } from './app/shared/search/search-results/search-results.component';
import { AdminSidebarComponent } from './app/admin/admin-sidebar/admin-sidebar.component';
import { SearchSettingsComponent } from './app/shared/search/search-settings/search-settings.component';
import { ObjectListComponent } from './app/shared/object-list/object-list.component';
import { ResultsBackButtonComponent } from './app/shared/results-back-button/results-back-button.component';
import { DsoEditMetadataComponent } from './app/dso-shared/dso-edit-metadata/dso-edit-metadata.component';

const DECLARATIONS = [
  AdminSidebarComponent,
  LoadingComponent,
];

@NgModule({
  imports: [
    AuthNavMenuComponent,
    BreadcrumbsComponent,
    CollectionPageComponent,
    CollectionStatisticsPageComponent,
    CommonModule,
    CommunityListComponent,
    CommunityListPageComponent,
    CommunityPageComponent,
    CommunityStatisticsPageComponent,
    ConfigurationSearchPageComponent,
    CreateProfileComponent,
    DragDropModule,
    DsoEditMetadataComponent,
    EditItemTemplatePageComponent,
    EndUserAgreementComponent,
    ExpandableNavbarSectionComponent,
    FeedbackComponent,
    FileSectionComponent,
    ForbiddenComponent,
    ForgotEmailComponent,
    ForgotPasswordFormComponent,
    FormsModule,
    FormsModule,
    FullItemPageComponent,
    HomePageComponent,
    HttpClientModule,
    ItemPageComponent,
    ItemStatisticsPageComponent,
    LoginPageComponent,
    LogoutPageComponent,
    MyDSpacePageComponent,
    NgbModule,
    ObjectListComponent,
    ObjectNotFoundComponent,
    PageNotFoundComponent,
    PrivacyComponent,
    ProfilePageComponent,
    RegisterEmailComponent,
    ResultsBackButtonComponent,
    RootComponent,
    RootModule,
    RouterModule,
    ScrollToModule,
    SearchPageComponent,
    SearchResultsComponent,
    SearchSettingsComponent,
    SiteStatisticsPageComponent,
    StoreModule,
    StoreRouterConnectingModule,
    TranslateModule,
    WorkflowItemDeleteComponent,
    WorkflowItemSendBackComponent,
  //  RegisterEmailFormModule,
  ],
  declarations: DECLARATIONS,
  exports: [
  ]
})

  /**
   * This module serves as an index for all the components in this theme.
   * It should import all other modules, so the compiler knows where to find any components referenced
   * from a component in this theme
   * It is purposefully not exported, it should never be imported anywhere else, its only purpose is
   * to give lazily loaded components a context in which they can be compiled successfully
   */
class LazyThemeModule {
}
