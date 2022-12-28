import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import * as packageInfo from 'package.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  entity: Entity;
  year: number;
  project: string;
  package = packageInfo;
  date: string;

  ngOnInit(): void {
    this.project = `${this.package.name.toUpperCase()} V.${this.package.version}`;
    this.year = new Date().getFullYear();
    this.entity = JSON.parse(sessionStorage.getItem('entity'));
    this.date = '27-12-2021'; // Colocar la fecha de cuando se genera el build
  }

}
