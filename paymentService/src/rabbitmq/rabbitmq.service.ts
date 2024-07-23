import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  ClientProxy,
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  private readonly logger = new Logger(RabbitMQService.name);
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly RMQClient: ClientProxy,
  ) {
    this.logger.log('Consumer service initialized');
    console.log('CONNECTED');
  }

  @MessagePattern('new_payment')
  public async getNotifications(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ) {
    console.log('Entered');
    this.logger.log(`Received message: ${JSON.stringify(data)}`);
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    console.log({ originalMsg });
    console.log({ data });

    channel.ack(originalMsg);
  }
}
