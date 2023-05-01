import { Order } from '@/components/order';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


export type GetOrdersReponse = {
  description: string;
  id: string;
  isActive: boolean;
  price: number;
  rejectedBy: string[];
  show: boolean;
  status: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export default () => {
  const [orders, setOrders] = useState<GetOrdersReponse[]>([]);

  async function getOrders(): Promise<void> {
    const { data } = await axios.get<{orderService: GetOrdersReponse[]}>('http://localhost:9000/api/public/v1/list-order-service');
    setOrders(data.orderService)
  }

  useEffect(() => {
    (async () => {

      await getOrders();
    })()
  }, []);

  return (
    <div>
        { orders.length && orders.map(order => {
          return <Order isActive={order.isActive} show={order.show} id={order.id} price={order.price} status={order.status} title={order.title} key={order.id} />
        })}
    </div>
  );
}