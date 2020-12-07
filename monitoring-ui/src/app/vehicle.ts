export class Vehicle{
  vehicleId: string;
  registrationNumber: string;
  customerId: number;
  status: string;
  constructor(vehicleId: string, registrationNumber: string, customerId: number, status: string) {
    this.customerId = customerId;
    this.vehicleId = vehicleId;
    this.registrationNumber = registrationNumber;
    this.status = status;
  }
}
