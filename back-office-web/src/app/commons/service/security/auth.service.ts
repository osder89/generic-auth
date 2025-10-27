import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {authKey, KeyStorage} from '../../utils/key-storage.util';
import {OkAuth} from '../../model/auth.inteface';
import {SecureStorageService} from '../../../../@generic/services/secure-storage.service';
import {UserAuth} from '../../model/user-auth.interface';
import {ApiResponse} from '../../model/api-response';
import {environment} from '../../../../environments/environment';
import {ThemeService} from '../../../../@generic/services/theme.service';
import {IUser} from '../../model/security.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private secureStorage: SecureStorageService,
              private themeServide: ThemeService) {}

  isLoggedIn() {
    return !!this.secureStorage.getStorage<OkAuth>(authKey.userLoginKey);
  }

  localSigninPersist(body: any) {
    this.secureStorage.setStorage(authKey.userLoginKey, body);
  }

  localUserIdPersist(userId: string) {
    this.secureStorage.setStorage("userId", userId);
  }

  localUsernamePersist(name: string) {
    this.secureStorage.setStorage("username", name);
  }

  getUserId(){
    return this.secureStorage.getStorage("userId");
  }

  getUserName() {
    return this.secureStorage.getStorage("username");
  }

  getModulId(){
    return this.secureStorage.getStorage("modulId");
  }

  requestLogin(auth: UserAuth): Observable<ApiResponse<OkAuth>> {
    const url = environment.api + environment.backend.apiLogin;
    return this.http.post<ApiResponse<OkAuth>>(url, JSON.stringify(auth));
  }

  requestLoginKeycloak(auth: any): Observable<ApiResponse<OkAuth>> {
    const url = environment.api + environment.backend.apiLoginKeycloak;
    return this.http.post<ApiResponse<OkAuth>>(url, JSON.stringify(auth));
  }

  requestLogoutUser(userId: string): Observable<ApiResponse<OkAuth>> {
    const url = environment.api + environment.backendV2.userApi+`/${userId}/close-all-session`;
    console.log("deslogeo "+url);
    return this.http.delete<ApiResponse<any>>(url);
  }

  requestLogout() {
    this.secureStorage.cleanStorage();
    this.secureStorage.setStorage(KeyStorage.themeKey.lastTheme, this.themeServide.getThemeConfig().theme);
  }

  localUserInfo(userInfo: IUser) {
    this.secureStorage.setStorage(authKey.userInfoKey, userInfo);
  }


  getUserInfo(): IUser {
    return this.secureStorage.getStorage<IUser>(authKey.userInfoKey);
  }
}
