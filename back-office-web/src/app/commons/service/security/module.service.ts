import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ILista, IUserAccess} from '../../model/security.interface';
import { IModule } from '../../model/audit-configuration.interface';
import {Paginator} from '../../utils/paginator';
import {map} from 'rxjs/operators';
import {ApiResponse} from '../../model/api-response';
import {mapResponseApi} from '../../utils/http.util';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  constructor(private http: HttpClient) {
  }

  requestModuleList(queryParams: any): Observable<Paginator<IModule>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.moduleApi;
    return this.http.get<ApiResponse<Paginator<IModule>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IModule>>(url, resp)));
  }

  requestModuleListAll(): Observable<ILista[]> {
    const url = environment.api + environment.backendV2.moduleApi + "/all";
    return this.http.get<ApiResponse<ILista[]>>(url)
      .pipe(map((resp) => mapResponseApi<ILista[]>(url, resp)));
  }

  requestModuleAuthorizers(mdlId: number): Observable<ILista[]> {
    const url = environment.api + environment.backendV2.moduleApi + `/${mdlId}` + "/authorizers";
    return this.http.get<ApiResponse<ILista[]>>(url)
      .pipe(map((resp) => mapResponseApi<ILista[]>(url, resp)));
  }

}
