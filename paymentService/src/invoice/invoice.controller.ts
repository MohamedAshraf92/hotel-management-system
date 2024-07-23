import { Controller } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import {
  Ctx,
  EventPattern,
  // MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller('invoice')
export class InvoiceController {
  // private readonly logger = new Logger(RabbitMQService.name);
  constructor(private invoiceService: InvoiceService) {}

  // @MessagePattern('new payment')
  // handleMessage(data: any) {
  //   console.log('Received message:', data);
  //   // Process the message
  // }

  @EventPattern('new payment')
  getNotifications(@Payload() data: number[], @Ctx() context: RmqContext) {
    console.log(context.getMessage());
  }
}
