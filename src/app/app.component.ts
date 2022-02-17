import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(private http: HttpClient) {
    const params = new HttpParams()
      .set('name', 'Jimmy-Tools');

    this.http.get('/api/test', { params })
      .subscribe((resp: any) => {
        console.log(resp);
        this.title = resp;
      });
  }
}
