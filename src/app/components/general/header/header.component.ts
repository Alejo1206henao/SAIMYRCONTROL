import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { TokenPayload } from 'src/app/models/token-payload';
import { SmrOffcanvas } from '@saimyr-software/styles';
import JWT from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() changeMenu = new EventEmitter<boolean>();
  @Input() change: boolean;
  menu: boolean;
  tokenPayload: TokenPayload;
  url = `${environment.urlLoggin}app/#/login`;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    const cookieSession = this.cookieService.get('smr_session');
    this.tokenPayload = JWT(cookieSession);
    if (!sessionStorage.getItem('smr_user')) { sessionStorage.setItem('smr_user', this.tokenPayload.user); }
  }

  showMenu(): void {
    this.menu = !this.menu;
    this.changeMenu.emit(this.menu);
  }

  about(): void {
    SmrOffcanvas.show('about');
  }

  logout(): void {
    this.cookieService.delete('smr_session');
    this.cookieService.delete('redirectTo', '/'); // 🔔 Se debe probar
    sessionStorage.clear();
    window.location.href = this.url;
  }

}
