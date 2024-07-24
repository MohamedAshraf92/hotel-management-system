import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class RabbitmqService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async publishMessage(routingKey: string, message: any) {
    await this.amqpConnection.publish('PAYMENT_SERVICE', routingKey, message);
  }
}
// @Injectable()
// export class RabbitMQService {
//   constructor(
//     @Inject('PAYMENT_SERVICE') private readonly RMQClient: ClientProxy,
//   ) {}

//   async publishMessage(pattern: string, message: any) {
//     this.RMQClient.emit(pattern, message).subscribe();
//     console.log('Message sent to RabbitMQ: new_payment');
//   }

//   @EventPattern('new_payment')
//   handleNewPayment(data: Record<string, unknown>) {
//     console.log('Message received from RabbitMQ: new_payment', data);
//   }
// }
