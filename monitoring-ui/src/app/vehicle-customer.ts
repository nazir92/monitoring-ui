export class VehicleCustomer{
  customerName: string;
  customerAddress: string;
  vehicleId: string;
  registrationNumber: string;
  status: string;

  constructor(customerName: string, customerAddress: string, vehicleId: string, registrationNumber: string, status: string) {
    this.customerName = customerName;
    this.customerAddress = customerAddress;
    this.vehicleId = vehicleId;
    this.registrationNumber = registrationNumber;
    this.status = status;
  }
}
