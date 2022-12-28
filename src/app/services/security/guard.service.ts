import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EntityService } from '../general/entity.service';
import { SecurityService } from './security.service';
import { environment } from 'src/environments/environment';
import { TokenPayload } from 'src/app/models/token-payload';
import JWT from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
  tokenPayload: TokenPayload;

  constructor(private cookieService: CookieService, private entityService: EntityService,
    private securityService: SecurityService) { }

  async canActivate(): Promise<boolean> {
    const cookieSession: string = this.cookieService.get('smr_session');
    if (cookieSession) {
      try {
        const isValid = await this.securityService.isValid(cookieSession).toPromise();
        if (isValid.valid) {
          if (!sessionStorage.getItem('smr_entity') || !sessionStorage.getItem('smr_user')) {
            this.tokenPayload = JWT(cookieSession);
            const entity = await this.entityService.get().toPromise();
            sessionStorage.setItem('entity', JSON.stringify(entity));
            sessionStorage.setItem('smr_entity', entity.entityId.toString());
            sessionStorage.setItem('smr_user', this.tokenPayload.user);
          }
          return true;
        } else { return this.redirectTo(); }
      } catch { return this.redirectTo(); }
    } else { return this.redirectTo(); }
  }

  private redirectTo(): boolean {
    this.cookieService.set('redirectTo', document.location.href);
    window.location.href = `${environment.urlLoggin}app/#/login`;
    return false;
  }
}
