import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor( public router: Router, private tokenStorage: TokenStorageService) { }

    canActivate(): boolean {
      
      if (this.tokenStorage.getUser().role === "candidate" && this.tokenStorage.getToken()) {
            /*this.router.navigate(['candidate/login']);
            return false;*/
            return true;
        }
      else {
      this.router.navigate(['candidate/login']);
      return false;
      }
    }
}