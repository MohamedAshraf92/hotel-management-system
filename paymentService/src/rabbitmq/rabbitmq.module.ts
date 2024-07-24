import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { RabbitmqService } from './rabbitmq.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'PAYMENT_SERVICE',
          type: 'topic',
        },
      ],
      uri: 'amqp://guest:guest@rabbitmq:5672',
      // enableControllerDiscovery: true,
    }),
  ],
  providers: [RabbitmqService],
  exports: [RabbitMQModule, RabbitmqService],
})
export class RabbitmqModule {}
