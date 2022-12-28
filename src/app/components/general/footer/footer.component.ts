import { Component, OnInit } from '@angular/core';
import { Entity } from 'src/app/models/entity';
import { EntityService } from 'src/app/services/general/entity.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  entity: Entity;

  constructor(private entityService: EntityService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('entity')) {
      this.entity = JSON.parse(sessionStorage.getItem('entity'));
    } else {
      this.entityService.get().subscribe(entity => {
        this.entity = entity;
        sessionStorage.setItem('entity', JSON.stringify(entity));
      });
    }
  }
}
