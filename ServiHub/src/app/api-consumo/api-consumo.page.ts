import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-consumo',
  templateUrl: './api-consumo.page.html',
  styleUrls: ['./api-consumo.page.scss'],
})
export class ApiConsumoPage implements OnInit {

  financiaData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchFinanciaData();
  
  }

  fetchFinanciaData(){
    this.http.get('https://mindicador.cl/api').subscribe((response: any)=>{
      console.log(response)

      this.financiaData = this.transformData(response);
    });
  }

  transformData(data: any): any[] {
    const result = [];
    for(const key in data){
      if(data.hasOwnProperty(key) && typeof data[key] === 'object'){
        result.push(data[key]);
      }
    }
    return result;

  }

}
