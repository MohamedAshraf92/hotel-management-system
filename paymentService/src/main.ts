import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    name: 'PAYMENT_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@rabbitmq:5672'],
      queue: 'payments_queue',
      noAck: true,
      queueOptions: {
        durable: false,
      },
      prefetchCount: 1,
    },
  });
  await app.startAllMicroservices();
  await app.listen(4001);
}
bootstrap();
