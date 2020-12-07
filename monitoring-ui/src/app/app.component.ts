import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {LocalDataSource} from 'ng2-smart-table';
import {Vehicle} from './vehicle';
import {Customer} from './customer';
import {VehicleCustomer} from './vehicle-customer';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  vehicleCustomers = [];
  settings = {
    actions: false,
    columns: {
      vehicleId: {
        title: 'Vehicle ID'
      },
      registrationNumber: {
        title: 'Registration Number'
      },
      customerName: {
        title: 'Customer Name'
      },
      customerAddress: {
        title: 'Customer Address'
      },
      status: {
        title: 'Status'
      },
    }
  };
  constructor(private appHttpService: AppService) {


  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.appHttpService.getCustomers().subscribe(valueCustomers => {
      if (valueCustomers) {
        this.appHttpService.getVehicles().subscribe(valueVehicles => {
          if (valueVehicles){
            this.accumulate(valueCustomers, valueVehicles);
            console.log(valueCustomers);
          }
        });
      }
    });
  }
  // tslint:disable-next-line:typedef
  accumulate(customers: Customer[], vehicles: Vehicle[]){
    for (const vehicle of vehicles) {
      const customerId = vehicle.customerId;
      // tslint:disable-next-line:prefer-const
      for (let customer of customers){
        if (customer.id === customerId){
          // tslint:disable-next-line:max-line-length
          const vehicleCustomer = new VehicleCustomer(customer.customerName, customer.customerAddress, vehicle.vehicleId, vehicle.registrationNumber, vehicle.status);
          // @ts-ignore
          this.vehicleCustomers.push(vehicleCustomer);

        }
      }
    }

    this.source.load(this.vehicleCustomers);
  }

}
