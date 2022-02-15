import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = '';

  constructor(private http: HttpClient) {
    const params = new HttpParams()
      .set('name', 'Jimmy-Tools');

    this.http.get('/api/test', { params })
      .subscribe((resp: any) => {
        console.log(resp);
        this.value = resp;
      });
  }
}


