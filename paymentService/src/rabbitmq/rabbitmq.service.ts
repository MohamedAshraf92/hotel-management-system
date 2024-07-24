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

// @Injectable()
// export class RabbitmqService {
//   private readonly logger = new Logger(RabbitmqService.name);
//   constructor(
//     @Inject('PAYMENT_SERVICE') private readonly RMQClient: ClientProxy,
//   ) {
//     this.logger.log('Consumer service initialized');
//     console.log('CONNECTED');
//   }

//   @MessagePattern('new_payment')
//   public async getNotifications(
//     @Payload() data: any,
//     @Ctx() context: RmqContext,
//   ) {
//     console.log('Entered');
//     this.logger.log(`Received message: ${JSON.stringify(data)}`);
//     const channel = context.getChannelRef();
//     const originalMsg = context.getMessage();

//     console.log({ originalMsg });
//     console.log({ data });

//     channel.ack(originalMsg);
//   }
// }
