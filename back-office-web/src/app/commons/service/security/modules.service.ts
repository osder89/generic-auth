import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {IRole,ILista} from '../../model/security.interface';
import {Paginator} from '../../utils/paginator';
import {map} from 'rxjs/operators';
import {ApiResponse} from '../../model/api-response';
import {mapResponseApi} from '../../utils/http.util';
import {IModule} from "../../model/configuracion.interface";

@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  constructor(private http: HttpClient) {
  }

  requestModulesList(queryParams: any): Observable<Paginator<IRole>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.modulesApi;
    return this.http.get<ApiResponse<Paginator<IRole>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IRole>>(url, resp)));
  }

  requestModuleListAll(): Observable<ILista> {
    const url = environment.api + environment.backendV2.modulesApi + "/all";
    return this.http.get<ApiResponse<ILista>>(url)
      .pipe(map((resp) => mapResponseApi<ILista>(url, resp)));
  }

  deleteModuleList(moduleId: number): Observable<boolean> {
    const url = environment.api + environment.backendV2.modulesApi + `/${moduleId}`;
    return this.http.delete<ApiResponse<boolean>>(url)
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }
  requestUpdateModule(id: number, body: IModule): Observable<IModule> {
    const url = environment.api + environment.backendV2.modulesApi + `/${id}`;
    return this.http.put<ApiResponse<IModule>>(url, body)
      .pipe(map((resp) => mapResponseApi<IModule>(url, resp)));
  }

  requestCreateModule(body: IModule): Observable<IModule> {
    const url = environment.api + environment.backendV2.modulesApi;
    return this.http.post<ApiResponse<IModule>>(url, body)
      .pipe(map((resp) => mapResponseApi<IModule>(url, resp)));
  }

  requestModulesPageableList(queryParams: any): Observable<Paginator<IModule>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.modulesApi;
    return this.http.get<ApiResponse<Paginator<IModule>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IModule>>(url, resp)));
  }

  requestModuleAuthorizers(mdlId: number): Observable<ILista[]> {
    const url = environment.api + environment.backendV2.moduleApi + `/${mdlId}` + "/authorizers";
    return this.http.get<ApiResponse<ILista[]>>(url)
      .pipe(map((resp) => mapResponseApi<ILista[]>(url, resp)));
  }
}
