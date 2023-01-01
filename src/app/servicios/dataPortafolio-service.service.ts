import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPortafolioService {

  constructor(private http:HttpClient) { }

  obtenerData():Observable<any>{
    return this.http.get('../../assets/data/data.json');
  }
}
