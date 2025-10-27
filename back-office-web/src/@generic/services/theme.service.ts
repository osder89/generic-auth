import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavService } from '../../app/layout/sidenav/sidenav.service';
import {MyThemeService} from '../../app/commons/services/security/my-theme.service';
import {AuthService} from '../../app/commons/services/security/auth.service';

export type Theme = 'mc4-default' | 'mc4-light' | 'mc4-dark' | 'mc4-flat';
export type ThemePosition = 'fixed' | 'above-fixed' | 'static';

export interface ThemeConfig {
  navigation: 'side' | 'top';
  sidenavUserVisible: boolean;
  toolbarVisible: boolean;
  toolbarPosition: ThemePosition;
  footerVisible: boolean;
  footerPosition: ThemePosition;
  theme?: Theme;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _themeSubject = new BehaviorSubject<[Theme, Theme]>([null, null]);
  theme$ = this._themeSubject.asObservable();
  activeTheme$ = this.theme$.pipe(
    map(theme => theme[1])
  );
  private _configSubject = new BehaviorSubject<ThemeConfig>({
    navigation: 'side',
    sidenavUserVisible: true,
    toolbarVisible: true,
    toolbarPosition: 'fixed',
    footerVisible: true,
    footerPosition: 'fixed'
  });
  config$ = this._configSubject.asObservable();

  constructor(private sidenavService: SidenavService,
              private myThemeService: MyThemeService) {
    this.setTheme('mc4-default');
  }

  setTheme(theme: Theme, update: boolean = false) {
    this._themeSubject.next([this._themeSubject.getValue()[1], theme]);
    if (update) this.updateAppConfig();
  }

  getTheme() {
    return this._themeSubject.getValue();
  }

  setThemeConfig(config: ThemeConfig) {
    this._configSubject.next(config);
  }

  getThemeConfig() {
    return this._configSubject.getValue();
  }

  setNavigation(navigation: 'side' | 'top') {
    this._configSubject.next({
      ...this._configSubject.getValue(),
      navigation
    });
    this.updateAppConfig();
  }

  setSidenavUserVisible(sidenavUserVisible: boolean) {
    this._configSubject.next({
      ...this._configSubject.getValue(),
      sidenavUserVisible
    });
    this.updateAppConfig();
  }

  setToolbarVisible(toolbarVisible: boolean) {
    this._configSubject.next({
      ...this._configSubject.getValue(),
      toolbarVisible
    });
    this.updateAppConfig();
  }

  setToolbarPosition(toolbarPosition: ThemePosition) {
    this._configSubject.next({
      ...this._configSubject.getValue(),
      toolbarPosition
    });
    this.updateAppConfig();
  }

  setFooterVisible(footerVisible: boolean) {
    this._configSubject.next({
      ...this._configSubject.getValue(),
      footerVisible
    });
    this.updateAppConfig();
  }

  setFooterPosition(footerPosition: ThemePosition) {
    this._configSubject.next({
      ...this._configSubject.getValue(),
      footerPosition
    });
    this.updateAppConfig();
  }

  setStyle(style: 'default' | 'flat' | 'dark' | 'light' | 'top' | string) {
    switch (style) {
      case 'flat': {
        this._configSubject.next({
          navigation: 'side',
          sidenavUserVisible: false,
          toolbarVisible: true,
          toolbarPosition: 'static',
          footerVisible: true,
          footerPosition: 'static'
        });

        this.sidenavService.setCollapsed(true);
        this.setTheme('mc4-flat');
        break;
      }

      case 'dark': {
        this.setTheme('mc4-dark');
        break;
      }

      case 'light': {
        this._configSubject.next({
          navigation: 'side',
          sidenavUserVisible: false,
          toolbarVisible: true,
          toolbarPosition: 'static',
          footerVisible: true,
          footerPosition: 'static'
        });

        this.setTheme('mc4-light');
        break;
      }

      case 'top': {
        this._configSubject.next({
          navigation: 'top',
          sidenavUserVisible: false,
          toolbarVisible: true,
          toolbarPosition: 'fixed',
          footerVisible: true,
          footerPosition: 'fixed'
        });
        break;
      }
    }
    this.updateAppConfig();
  }

  protected updateAppConfig = () => {
    const config: ThemeConfig = this._configSubject.getValue();
    const themeList: Theme[] = this._themeSubject.getValue();
    config.theme = themeList[themeList.length - 1];
    this.myThemeService.requestUpdateAppTheme(config)
      .subscribe({
        next: console.log,
        error: console.error
      });
  }

  recoveryAppTheme(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.myThemeService.requestAppTheme()
        .subscribe({
          next: (body: string) => {
            if (body) {
              const themeConfig: ThemeConfig = JSON.parse(body);
              this.setTheme(themeConfig.theme);
              this.setThemeConfig(themeConfig);
            } else {
              this.setStyle('default');
            }
            resolve(true);
          },
          error : (error) => {
            this.setStyle('default');
            resolve(true);
          }
        });
    });
  }
}
