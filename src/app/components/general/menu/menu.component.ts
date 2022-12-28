import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

interface Option {
  name: string;
  path: string;
  select: boolean;
}
interface Item {
  title: string;
  select: boolean;
  icon: string;
  options: Option[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() selectItem = new EventEmitter<boolean>();
  items: Item[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        title: 'Configuración',
        select: false,
        icon: 'fa-cog',
        options: [
          { name: 'importacion', path: '/configuracion/import', select: false },
      ]
      },
      {
        title: 'otro',
        select: false,
        icon: 'fa-cog',
        options: [{ name: 'prueba', path: '', select: false }]
      },
    ];
    this.selectOptionByPath(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) { this.selectOptionByPath(event.url); }
    });
  }

  selectOptionByPath(path: string): void {
    this.items.map(item => item.options.map(option => option.path === path ? this.goItem(item, option) : ''));
  }

  goItem(item: Item, option: Option): void {
    this.items.forEach(itm => {
      itm.select = false;
      itm.options.forEach(opt => opt.select = false);
    });
    item.select = true;
    option.select = true;
    if (item.options.length === 1) { this.router.navigateByUrl(option.path); }
    if (window.outerWidth <= 768) { this.selectItem.emit(true); }
  }

  goItemExtern(title: string, name: string): void {
    const item = this.items.find(itm => itm.title === title);
    const option = item.options.find(opt => opt.name === name);
    this.items.forEach(itm => {
      itm.select = false;
      itm.options.forEach(opt => opt.select = false);
    });
    item.select = true;
    option.select = true;
    if (window.outerWidth <= 768) { this.selectItem.emit(true); }
  }

}
