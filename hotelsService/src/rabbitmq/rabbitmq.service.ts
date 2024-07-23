import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly RMQClient: ClientProxy,
  ) {}

  async publishMessage(pattern: string, message: any) {
    return this.RMQClient.emit(pattern, message).pipe();
  }
}
