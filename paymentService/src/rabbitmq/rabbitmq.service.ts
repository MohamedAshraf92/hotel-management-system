import { Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  Ctx,
  EventPattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly RMQClient: ClientProxy,
  ) {}

  async publishMessage(pattern: string, message: any) {
    return this.RMQClient.emit(pattern, message).pipe();
  }

  @EventPattern('new payment')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log(context.getMessage());
  }
}
