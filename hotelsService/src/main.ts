import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // RabbitMQ microservice options
  // const microserviceOptions: MicroserviceOptions = {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqp://guest:guest@rabbitmq:5672'],
  //     queue: 'payments_queue',
  //     queueOptions: {
  //       durable: false,
  //     },
  //   },
  // };

  // Create the microservice
  // app.connectMicroservice<MicroserviceOptions>(microserviceOptions);

  // Start the microservice
  // await app.startAllMicroservices();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(4000);
}
bootstrap();
