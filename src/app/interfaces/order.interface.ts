export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Payment {
  id: string;
  date: string;
  status: number;
  paymentMethod: number;
  stripPaymentId: string | null;
  amount: number;
  userId: string | null;
  orderId: string;
}

export interface Order {
  id: string;
  totalAmount: number;
  date: string;
  arrivalDate: string;
  status: number;
  userId: string;
  orderItems: OrderItem[];
  payment: Payment;
}