import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailGuard implements CanActivate {
  //adding
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //adding
    let id = +next.url[1].path; //albums/id 0/1
    if (isNaN(id) || id < 1) {
      alert('Invalid album Id');
      this.router.navigate(['/albums']);
      return false;
    }
    return true;
  }
}
