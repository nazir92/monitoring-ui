import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.prod';
import {Customer} from './customer';
import {Vehicle} from './vehicle';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AppService {
  // @ts-ignore
  constructor(private http: HttpClient){
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  public getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(environment.customerUrl);
  }


  // @ts-ignore
  public getVehicles(): Observable<Vehicle[]>{
   return this.http.get<Vehicle[]>(environment.vehicleUrl + 'vehicles');

  }


}
