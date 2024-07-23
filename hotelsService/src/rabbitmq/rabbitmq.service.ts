import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly RMQClient: ClientProxy,
  ) {}

  async publishMessage(pattern: string, message: any) {
    this.RMQClient.emit(pattern, message).subscribe();
    console.log('Message sent to RabbitMQ: new_payment');
  }

  @EventPattern('new_payment')
  handleNewPayment(data: Record<string, unknown>) {
    console.log('Message received from RabbitMQ: new_payment', data);
  }
}
