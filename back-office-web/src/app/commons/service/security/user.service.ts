import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {SidenavItem} from '../../../layout/sidenav/sidenav-item/sidenav-item.interface';
import {ApiResponse} from '../../model/api-response';
import {environment} from '../../../../environments/environment';
import {Paginator} from '../../utils/paginator';
import {IRole, IUser, IUserCreate, IUserInfo, IUserSession, IUserListAndModulesReport} from '../../model/security.interface';
import {map} from 'rxjs/operators';
import {mapResponseApi} from '../../utils/http.util';
import {IBusinessUnit, IBusinessUnitMedic} from "../../model/configuracion.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  mostrarElemento = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {
  }


  requestUserResourceList(queryParams: any): Observable<ApiResponse<SidenavItem[]>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.userApi+ '/user-resource-list';
    return this.http.get<ApiResponse<SidenavItem[]>>(url,{params});
  }

  requestUserList(queryParams: any): Observable<Paginator<IUser>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.userApi;
    return this.http.get<ApiResponse<Paginator<IUser>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IUser>>(url, resp)));
  }

  requestUserReportList(queryParams: any): Observable<Paginator<IUserListAndModulesReport>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.userApi + `/user-report-list`;
    return this.http.get<ApiResponse<Paginator<IUserListAndModulesReport>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IUserListAndModulesReport>>(url, resp)));
  }

  requesAuthorizerstUserReportList(queryParams: any): Observable<Paginator<IUserListAndModulesReport>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.userApi + `/authorizer-user-report-list`;
    return this.http.get<ApiResponse<Paginator<IUserListAndModulesReport>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IUserListAndModulesReport>>(url, resp)));
  }

  requestCreateUser(body: IUserCreate): Observable<IUserCreate> {
    const url = environment.api + environment.backendV2.userApi;
    return this.http.post<ApiResponse<IUserCreate>>(url, body)
      .pipe(map((resp) => mapResponseApi<IUserCreate>(url, resp)));
  }

  requestUpdateUser(id: number, body: IUser): Observable<IUser> {
    const url = environment.api + environment.backendV2.userApi + `/${id}`;
    return this.http.put<ApiResponse<IUser>>(url, body)
      .pipe(map((resp) => mapResponseApi<IUser>(url, resp)));
  }

  //limpiar
  // requestDeleteUser(userId: number): Observable<boolean> {
  //   const url = environment.api + environment.backendV2.userApi + `/${userId}`;
  //   return this.http.delete<ApiResponse<boolean>>(url)
  //     .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  // }

  requestDisableUser(userId: number, userStatus: string): Observable<boolean> {
    const params: HttpParams = new HttpParams().appendAll({userId, userStatus});
    const url = environment.api + environment.backendV2.userApi + '/update-state';
    return this.http.put<ApiResponse<boolean>>(url, null, {params})
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

  requestBlockUser(userId: number): Observable<boolean> {
    const url = environment.api + environment.backendV2.userApi + `/${userId}`+ '/block';
    return this.http.put<ApiResponse<boolean>>(url, null)
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

  requestUserInfo(): Observable<IUser> {
    const url = environment.api + environment.backendV2.userApi + '/user-info';
    return this.http.get<ApiResponse<IUser>>(url)
      .pipe(map((resp) => mapResponseApi<IUser>(url, resp)));
  }

  requestUserInformation(userId: number): Observable<IUserInfo> {
    const url = environment.api + environment.backendV2.userApi + '/' + userId;
    return this.http.get<ApiResponse<IUserInfo>>(url)
      .pipe(map((resp) => mapResponseApi<IUserInfo>(url, resp)));
  }

  requestHistorialSesionList(queryParams: any): Observable<Paginator<any>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.userApi + '/log-sesiones';
    return this.http.get<ApiResponse<Paginator<any>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<any>>(url, resp)));
  }

  requestChangePass(body: any): Observable<IUser> {
    const url = environment.api + environment.backend.apiChangePass;
    return this.http.post<ApiResponse<any>>(url, body)
      .pipe(map((resp) => mapResponseApi<any>(url, resp)));
  }

  requestVersion(): Observable<string> {
    const url = environment.api + '/about/version';
    return this.http.get<ApiResponse<string>>(url)
      .pipe(map((resp) => mapResponseApi<string>(url, resp)));
  }

  requestExistsUserName(queryParams: any): Observable<boolean> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.userApi + '/exists-username';
    return this.http.get<ApiResponse<boolean>>(url,{params})
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

  requestExistsEmail(queryParams: any): Observable<boolean> {
    console.log(queryParams);
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.userApi + '/exists-email';
    return this.http.get<ApiResponse<boolean>>(url,{params})
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

  requestDestroySessions(userId: string): Observable<boolean> {
    console.log(`Destroying sessions of user with id: ${userId}`);
    const url = environment.api + environment.backendV2.userApi + `/${userId}`+'/close-all-session';
    return this.http.delete<ApiResponse<boolean>>(url)
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

  requestRstPassword(usr: any): Observable<boolean> {
    console.log(usr);
    const url = environment.api + environment.backendV2.userApi + `/${usr.id}` + '/reset-password';
    return this.http.put<ApiResponse<boolean>>(url, {password: null})
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

  requestRstPassWithoutEmail(usr: any, newPass: string): Observable<boolean> {
    console.log(usr);
    const url = environment.api + environment.backendV2.userApi + `/${usr.id}` + '/reset-password';
    return this.http.put<ApiResponse<boolean>>(url, {password: newPass})
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

  requestUnblockUser(userId: number): Observable<boolean> {
    const url = environment.api + environment.backendV2.userApi + `/${userId}`+ '/unblock';
    return this.http.put<ApiResponse<boolean>>(url, null)
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }

  requestSessionsList(queryParams: any): Observable<Paginator<IUserSession>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.userApi+"/users-sessions";
    return this.http.get<ApiResponse<Paginator<IUserSession>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IUserSession>>(url, resp)));
  }

  requestGetUserInfo():Observable<IUserInfo>{
    const url = environment.api + environment.backendV2.userApi+'/login-info';
    return this.http.get<ApiResponse<IUserInfo>>(url)
      .pipe(map((resp) => mapResponseApi<IUserInfo>(url, resp)));

  }

  getBusinessUnitByUserKeycloak(keycloak: any): Observable<IBusinessUnitMedic> {
    const url = environment.api + environment.backendV2.userApi + '/get-business-unit-by-user-keycloak'+ `/${keycloak}`;
    return this.http.get<ApiResponse<IBusinessUnitMedic>>(url)
      .pipe(map((resp) => mapResponseApi<IBusinessUnitMedic>(url, resp)));
  }
}
