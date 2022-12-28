import { Component, OnInit } from '@angular/core';
import { SmrLoadingState } from '@saimyr-software/styles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  changeIcon: boolean;
  menu: boolean;
  loading: boolean;

  ngOnInit(): void {
    SmrLoadingState.loading.subscribe(answer => setTimeout(() => this.loading = answer));
    this.changeIcon = false;
  }

  changeMenu(change: boolean): void {
    this.menu = change;
  }

  selectItem(change: boolean): void {
    this.changeIcon = !this.changeIcon;
    this.menu = !change;
  }
}
