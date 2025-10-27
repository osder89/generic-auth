import { LogService } from './log.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAction, IResource, IRole} from '../../model/security.interface';
import {environment} from '../../../../environments/environment';
import {ApiResponse} from '../../model/api-response';
import {map} from 'rxjs/operators';
import {mapResponseApi} from '../../utils/http.util';
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  requestAllResourceList(clientId: string): Observable<IResource[]> {
    const url = environment.api + environment.backendV2.resourceApi + `?clientId=${clientId}`;
    return this.http.get<ApiResponse<IResource[]>>(url)
      .pipe(map((resp) => mapResponseApi<IResource[]>(url, resp)));
  }

  requestActionList(frontendCode: string): Observable<any> {
    const userId =this.authService.getUserId();
    const url = environment.api + environment.backendV2.resourceApi + `/actions-by-user?frontendCode=${frontendCode}&id=${userId}`;
    return this.http.get<ApiResponse<any>>(url)
      .pipe(map((resp) => mapResponseApi<any>(url, resp)));
  }
  requestActionListKeyCloak(frontendCode: string, id: any): Observable<any> {
    const url = environment.api + environment.backendV2.resourceApi + `/actions-by-user?id=${id}&frontendCode=${frontendCode}`;
    return this.http.get<ApiResponse<any>>(url)
      .pipe(map((resp) => mapResponseApi<any>(url, resp)));

  }

  requestUpdateResource(id: number, body: any) {
    const url = environment.api + environment.backendV2.resourceApi + `/${id}`;
    return this.http.put<ApiResponse<IRole>>(url, body)
      .pipe(map((resp) => mapResponseApi<IRole>(url, resp)));
  }
}
