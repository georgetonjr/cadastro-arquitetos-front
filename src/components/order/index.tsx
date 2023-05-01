import React from 'react';
import './index.css';

type OrderProps = {
  id: string;
  title: string;
  status: string;
  price: number;
  isActive: boolean;
  show: boolean;
}

export const Order: React.FC<OrderProps> = (props: OrderProps) => {
  return (
    <div className='Order' oncl>
      <span>Titulo: {props.title}</span>
      <span>Status: {props.status}</span>
      <span> Preço: {new Intl.NumberFormat('PT-BR', { currency: 'BRL', style: 'currency' }).format(props.price)}</span>
    </div>
  );
}
