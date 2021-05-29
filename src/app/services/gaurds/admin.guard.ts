// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AdminGuard implements CanActivate {
//   constructor(private authSer: AuthService, private router: Router) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     return new Promise((resolve) => {
//       this.authSer.user.subscribe((user) => {
//         console.log("🚀 ~ file: admin.guard.ts ~ line 27 ~ AdminGuard ~ this.authSer.user.subscribe ~ user", this.authSer.isAdmin)
//         if (user && this.authSer.isAdmin == true) resolve(true);
//         else {
//           this.router.navigate(['/']);
//         }
//       });
//     });
//   }
// }

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authSer: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve) => {
      this.authSer.user.subscribe((user) => {
        this.authSer.userData.subscribe((data) => {
          if (data.isadmin) resolve(true);
          else {
            this.router.navigate(['/']);
          }
        });
      });
    });
  }
}
