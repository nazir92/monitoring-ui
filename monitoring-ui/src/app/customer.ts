export class Customer{
  id: number;

  customerName: string;

  customerAddress: string;

  constructor(id: number, customerName: string, customerAddress: string) {
    this.id = id;
    this.customerName = customerName;
    this.customerAddress = customerAddress;
  }
}

