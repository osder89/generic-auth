import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import {environment} from '../../environments/environment';

import {AuthService} from '../../app/commons/services/security/auth.service';
import {OkAuth} from '../../app/commons/model/auth.inteface';
import {ApiResponse} from '../../app/commons/model/api-response';
import {UserService} from '../../app/commons/services/security/user.service';
import {ThemeService} from '../services/theme.service';
import {SidenavService} from '../../app/layout/sidenav/sidenav.service';
import { jwtDecode } from "jwt-decode";

export function initializeKeycloak(keycloak: KeycloakService,
                            authService: AuthService,
                            userService: UserService,
                            themeService: ThemeService,
                            sidenavService: SidenavService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        const keycloakConfig = environment.keycloakConfig;
        try {
            const initRes = await keycloak.init({
                config: keycloakConfig,
                initOptions: {
                    onLoad: 'login-required',
                    checkLoginIframe: false,
                },
                bearerExcludedUrls: [
                  // comentar este objeto para enviar el token de keycloack
                  // {
                  //   url: environment.api + environment.backend.apiLogin,
                  //   httpMethods: ['POST']
                  // }
                ]
            });
            console.log("keycloak is loggin", await keycloak.isLoggedIn());

            //const modulId = decoded['azp'];
            // console.log("token:", decoded);

            // await themeService.recoveryAppTheme();
            if (await keycloak.isLoggedIn()) {
              //Debe ejecutarse cuando no exista el userId en el localStorage
              const jwt = await keycloak.getToken();
              const decoded = jwtDecode(jwt);
              const userId = decoded['sub'];
              authService.localUserIdPersist(userId);
              const userName = decoded['name'];
              authService.localUsernamePersist(userName);
              sidenavService.reloadResources();
              // login sin usuario

              // const backLogin: ApiResponse<OkAuth> = await authService.requestLoginKeycloak({jwt}).toPromise();
              // if (backLogin) {
              //   authService.localSigninPersist(backLogin.data);

              //   const userInfo = await userService.requestUserInfo().toPromise();
              //   if (userInfo) {
              //     authService.localUserInfo(userInfo);
              //   }

              // }
              resolve(true);
            }
            else{
              resolve(false);
            }

            // else {
          //   // await this.router.navigate(['/']);
          //   resolve(false);
          // }
        } catch (error) {
          console.error('initializer keycloak 4', error);
            reject(error);
        }
    });
};
  }
