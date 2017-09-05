/*
 * @Author: Chao Yang
 * @Date: 2017-08-25 08:01:36
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2017-09-05 03:34:36
 */
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RoutesRecognized, Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { environment } from '../environments/environment';
import { AccountService } from './services/account/account.service';
import { languageKeys } from './app.global';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nankingcigar-demo-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  _routeClass: string;
  _pageClass: string;
  _titleBroadCast: Subject<string>;
  _pageTitle: string;

  constructor(
    private _renderer: Renderer2,
    private _router: Router,
    private _translateService: TranslateService,
    private _title: Title,
    private _accountService: AccountService
  ) {
    this._translateService.setDefaultLang('en');
    this._titleBroadCast = new Subject<string>();
    this._titleBroadCast.asObservable().subscribe(title => {
      this._pageTitle = title;
      this.setPageTitle();
    });
    this.setApp();
    this._translateService.onLangChange.subscribe((e: LangChangeEvent) => {
      this.setApp();
      this.setPageTitle();
    });
    this._router.events
      .subscribe(event => {
        if (event instanceof RoutesRecognized) {
          let route = event.state.root;
          let parentRoute = route;
          while (route.children.length > 0) {
            route = route.firstChild;
            if (parentRoute.data && parentRoute.data.toAuth === true) {
              if (!route.data) {
                route.data = {};
              }
              if (!route.data.toAuth) {
                route.data = Object.assign({ toAuth: true }, route.data);
              }
            }
            parentRoute = route;
          }
          if (route.data.toAuth) {
            if (this._accountService.canActivate() === false) {
              this._router.navigate(['login']);
              return;
            }
          } else {
            if (this._accountService.canActivate() === true) {
              this._router.navigate(['app/dashboard']);
              return;
            }
          }
          if (this._routeClass) {
            this._renderer.removeClass(document.body, this._routeClass);
            this._routeClass = undefined;
          }
          this._routeClass = event.urlAfterRedirects.slice(1).replace(/[/]/g, '-');
          if (this._routeClass === '') {
            this._routeClass = undefined;
          } else {
            this._routeClass = environment.classPrefix + this._routeClass;
          }
          if (this._routeClass) {
            this._renderer.addClass(document.body, this._routeClass);
          }
          if (this._pageClass) {
            this._renderer.removeClass(document.body, this._pageClass);
            this._pageClass = undefined;
          }
          if (route.data) {
            if (route.data.pageClass && route.data.pageClass !== '') {
              this._pageClass = route.data.pageClass;
              this._renderer.addClass(document.body, this._pageClass);
            }
            if (route.data.title && route.data.title !== '') {
              this._titleBroadCast.next(environment.titlePrefix + route.data.title);
            } else {
              this._titleBroadCast.next(environment.defaultTitle);
            }
          } else {
            this._titleBroadCast.next(environment.defaultTitle);
          }
        }
      });
  }

  private setPageTitle() {
    console.log(app);
    this._translateService.get(this._pageTitle, app)
      .subscribe((translation: string) => {
        this._title.setTitle(translation);
      });
  }

  private setApp() {
    this._translateService.get([languageKeys.system, languageKeys.author])
      .subscribe((translation: any) => {
        app.system = translation[languageKeys.system];
        app.author = translation[languageKeys.author];
      });
  }
}
