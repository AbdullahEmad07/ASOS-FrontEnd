  export interface IOrder {
    id: string;
    totalAmount: number;
    date: string; // ISO string
    arrivalDate: string; // ISO string
    status: number;
    address: string;
    phoneNumber: string;
    userId: string;
    orderItems: IOrderItem[];
    payment: IPayment;
  }
  
  export interface IOrderItem {
    productId: string;
    quantity: number;
    price: number;
    name: string;
    imageUrls: string[];
  }
  
 export interface IPayment {
    id: string;
    date: string; // ISO string
    status: number;
    paymentMethod: number;
    stripPaymentId: string | null;
    amount: number;
    userId: string | null;
    orderId: string;
  }
  
  