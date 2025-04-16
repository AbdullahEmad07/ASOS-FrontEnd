import { Component } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.css'
})
export class UserOrdersComponent {

  orders = [
    {
      id: 1,
      placed: 'Mar 25, 2025',
      total: '$200.00',
      shipTo: 'Egypt,Mansoura',
      name: ' relaxed oxford shirt in tan',
      description: `-Top-half options
- Plain design
- Button-down collar
- Button placket`,
      quantity: 1,
      status: 'Shipped on 12.11.19',
      statusClass: 'shipped',
      delivery: 'Mar 30, 2025',
      img:"../../../assets/1.jpg"
    },
    {
      id: 2,
      placed: 'Mar 25, 2025',
      total: '$100.00',
      shipTo: 'Egypt',
      name: ' relaxed oxford shirt in tan',
      description: `-Top-half options
- Plain design
- Button-down collar
- Button placket`,
      quantity: 3,
      status: 'Received on 12.11.19',
      statusClass: 'shipped',
      delivery: 'Mar 30, 2025',
      img:"../../../assets/2.jpg"
    }
  ];

  archiveOrder(orderId: number) {
    this.orders = this.orders.filter(order => order.id !== orderId);
  
 }


}
