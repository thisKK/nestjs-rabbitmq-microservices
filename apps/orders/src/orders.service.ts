import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRepository) {}
  async createOrder(request: CreateOrderRequest) {
    return this.orderRepository.create(request);
  }
}
