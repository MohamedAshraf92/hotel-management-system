import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitmqService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async publishMessage(routingKey: string, message: any) {
    await this.amqpConnection.publish('PAYMENT_SERVICE', routingKey, message);
  }
}
