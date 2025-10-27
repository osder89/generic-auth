import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ApiResponse} from '../../model/api-response';
import {IAction, IPrivilege} from '../../model/security.interface';
import {map} from 'rxjs/operators';
import {mapResponseApi} from '../../utils/http.util';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http: HttpClient) {}

  requestAvailableActionList(resourceId: number): Observable<IAction[]> {
    const url = environment.api + environment.backendV2.actionApi + `/find-available-by-resource?resourceId=${resourceId}`;
    return this.http.get<ApiResponse<IAction[]>>(url)
      .pipe(map((resp) => mapResponseApi<IAction[]>(url, resp)));
  }

  requestPrivilegesByRolAndResource(roleId: number, resourceId: number): Observable<IPrivilege[]> {
    const params: HttpParams = new HttpParams().appendAll({roleId, resourceId});
    const url = environment.api + environment.backendV2.actionApi + '/privileges-by-role-and-resource';
    return this.http.get<ApiResponse<IPrivilege[]>>(url, {params})
      .pipe(map((resp) => mapResponseApi<IPrivilege[]>(url, resp)));
  }
}
