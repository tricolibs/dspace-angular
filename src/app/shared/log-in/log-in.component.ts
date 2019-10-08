import { Component, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthMethodModel } from '../../core/auth/models/auth-method.model';
import { select, Store } from '@ngrx/store';
import { getAuthenticationMethods, isAuthenticated, isAuthenticationLoading } from '../../core/auth/selectors';
import { CoreState } from '../../core/core.reducers';
import { InjectedAuthMethodModel } from './injectedAuthMethodModel/injectedAuthMethodModel';

@Component({
  selector: 'ds-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit, OnDestroy {
  /**
   * The authentication methods data
   * @type {AuthMethodModel[]}
   */
  @Input() authMethodData: Observable<AuthMethodModel[]>;

  private authMethods: AuthMethodModel[];

  private injectedAuthMethods: InjectedAuthMethodModel[];

  @Input() isStandalonePage: boolean;

  /**
   * Whether user is authenticated.
   * @type {Observable<string>}
   */
  public isAuthenticated: Observable<boolean>;

  /**
   * True if the authentication is loading.
   * @type {boolean}
   */
  public loading: Observable<boolean>;
  private subscription: Subscription;

  constructor(private store: Store<CoreState>) {
  }

  ngOnInit(): void {
    this.authMethodData = this.store.pipe(select(getAuthenticationMethods));

    this.subscription = this.authMethodData.subscribe((methods) => this.authMethods = methods);
    this.injectedAuthMethods = new Array<InjectedAuthMethodModel>();
    // tslint:disable-next-line:forin
    for (const index in this.authMethods) {
      const injectedAuthMethod = new InjectedAuthMethodModel(this.authMethods[index].authMethodType, this.authMethods[index].location, this.isStandalonePage);
      this.injectedAuthMethods.push(injectedAuthMethod);
    }

    // set loading
    this.loading = this.store.pipe(select(isAuthenticationLoading));

    // set isAuthenticated
    this.isAuthenticated = this.store.pipe(select(isAuthenticated));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
