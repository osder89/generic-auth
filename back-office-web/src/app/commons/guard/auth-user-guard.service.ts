import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ResourceService} from "../services/security/resource.service";
import {resourceCode} from "../utils/constants";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class AuthUserGuardService implements CanActivate {

  constructor(
    private resourceService: ResourceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot):   Observable<boolean| UrlTree> {
    const actionNeeded = route.data.action as string;
    return this.resourceService.requestActionList(resourceCode.userResourceCode).pipe(
      map((actions) => {
        if (actions && actions[actionNeeded]) {
          return true;
        } else {
          return this.router.createUrlTree(['/security/users']);
        }
      }),
      catchError((error) => {
        console.error( error);
        return of(this.router.createUrlTree(['/security/users']));
      })
    );
  }
}
