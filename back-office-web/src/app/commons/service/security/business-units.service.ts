import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {IRole, ILista, IUserInfo} from '../../model/security.interface';
import {Paginator} from '../../utils/paginator';
import {map} from 'rxjs/operators';
import {ApiResponse} from '../../model/api-response';
import {mapResponseApi} from '../../utils/http.util';
import {IUnidadNegocio, IUnidadNegocioInfo} from "../../model/configuracion.interface";

@Injectable({
  providedIn: 'root'
})
export class BusinessUnitsService {
  constructor(private http: HttpClient) {
  }

  requestBusinessUnitsList(queryParams: any): Observable<Paginator<IRole>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.businessUnitsApi;
    return this.http.get<ApiResponse<Paginator<IRole>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IRole>>(url, resp)));
  }

  requestBusinessUnitsListAll(): Observable<ILista[]> {
    const url = environment.api + environment.backendV2.businessUnitsApi + "/all";
    return this.http.get<ApiResponse<ILista[]>>(url)
      .pipe(map((resp) => mapResponseApi<ILista[]>(url, resp)));
  }

  requestBusinessUnitByRegion(idRegion:number):Observable<ILista[]>{
    const url=environment.api+environment.backendV2.businessUnitsApi+"/listarBusinessUnit"+`/${idRegion}`;
    return this.http.get<ApiResponse<ILista[]>>(url).pipe(map((resp)=>mapResponseApi<ILista[]>(url,resp)));

  }

  requestBusinessUnitInfo(businessUnitId: number): Observable<IUnidadNegocioInfo> {
    const url = environment.api + environment.backendV2.businessUnitsApi + '/' + businessUnitId;
    return this.http.get<ApiResponse<IUnidadNegocioInfo>>(url)
      .pipe(map((resp) => mapResponseApi<IUnidadNegocioInfo>(url, resp)));
  }
  deleteBusinessUnitList(businessUnitId: number): Observable<boolean> {
    const url = environment.api + environment.backendV2.businessUnitsApi + `/${businessUnitId}`;
    return this.http.delete<ApiResponse<boolean>>(url)
      .pipe(map((resp) => mapResponseApi<boolean>(url, resp)));
  }
  requestUpdateBusinessUnit(id: number, body: IUnidadNegocio): Observable<IUnidadNegocio> {
    const url = environment.api + environment.backendV2.businessUnitsApi + `/${id}`;
    return this.http.put<ApiResponse<IUnidadNegocio>>(url, body)
      .pipe(map((resp) => mapResponseApi<IUnidadNegocio>(url, resp)));
  }

  requestCreateBusinessUnit(body: IUnidadNegocio): Observable<IUnidadNegocio> {
    const url = environment.api + environment.backendV2.businessUnitsApi;
    return this.http.post<ApiResponse<IUnidadNegocio>>(url, body)
      .pipe(map((resp) => mapResponseApi<IUnidadNegocio>(url, resp)));
  }

  requestBusinessUnitsPageableList(queryParams: any): Observable<Paginator<IUnidadNegocio>> {
    const params: HttpParams = new HttpParams().appendAll(queryParams);
    const url = environment.api + environment.backendV2.businessUnitsApi + '/listBusinessUnit';
    return this.http.get<ApiResponse<Paginator<IUnidadNegocio>>>(url, {params})
      .pipe(map((resp) => mapResponseApi<Paginator<IUnidadNegocio>>(url, resp)));

  }
  requestBusinessUnitByIdRegion(idRegion: number): Observable<IUnidadNegocio[]> {
    const url = environment.api + environment.backendV2.businessUnitsApi + '/listarBusinessUnit' + `/${idRegion}`;
    return this.http.get<ApiResponse<IUnidadNegocio[]>>(url)
      .pipe(map((resp) => mapResponseApi<IUnidadNegocio[]>(url, resp)));
  }

  requestIdBusinessUnit(name: string): Observable<number> {
    const url = environment.api + environment.backendV2.businessUnitsApi + '/id-business-unit' + `/${name}`;
    return this.http.get<ApiResponse<number>>(url)
      .pipe(map((resp) => mapResponseApi<number>(url, resp)));
  }
}
