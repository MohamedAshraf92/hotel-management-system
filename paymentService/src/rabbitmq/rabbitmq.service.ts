import { Injectable } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitmqService {
  @RabbitSubscribe({
    exchange: 'PAYMENT_SERVICE',
    routingKey: 'new_payment',
    queue: 'payments',
  })
  async handleMessage(message: any) {
    console.log('Received message:', message);
    // Process the message here
  }
}
