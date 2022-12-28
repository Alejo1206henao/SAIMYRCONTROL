import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { EntityService } from 'src/app/services/general/entity.service';
import * as XLSX from 'xlsx';
import { Entity } from 'src/app/models/entity';
import { Route, ParamMap } from '@angular/router';

@Component({
  selector: 'app-config-import',
  templateUrl: './config-import.component.html',
  styleUrls: ['./config-import.component.scss']
})
export class ConfigImportComponent implements OnInit {

  route: Route;

  entity: Entity;

  billList: Factura[];

  arrayBuffer: any;
  
  file: File;

  constructor(private configService: ConfigurationService) {
  }
  

  ngOnInit(): void {
    this.entity = JSON.parse(sessionStorage.getItem('entity'));
  }
  

  addfile(event)     
  {    
  this.file= event.target.files[0];     
  let fileReader = new FileReader();    
  fileReader.readAsArrayBuffer(this.file);     
  fileReader.onload = (e) => {    
      this.arrayBuffer = fileReader.result;    
      let data = new Uint8Array(this.arrayBuffer);    
      let arr = new Array();    
      for(let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
      let bstr = arr.join("");    
      let workbook = XLSX.read(bstr, {type:"binary"});    
      let first_sheet_name = workbook.SheetNames[0];    
      let worksheet = workbook.Sheets[first_sheet_name];    
      this.billList=XLSX.utils.sheet_to_json(worksheet,{raw:true});
      console.log(this.billList)
      this.ImportControl(this.billList, 100);
  }    
}    

  ImportControl(file:Factura[], entityId:number){
    this.configService.ImportControl(file, entityId).then(resp =>{
      console.log(resp);
    });
  }
}
