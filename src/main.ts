import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices/enums/transport.enum';
import { AppModule } from './app.module';
import { mqttOptions } from './mqttoptions';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.MQTT,
      options: {
        hostname: 'broker.hivemq.com',
        port: 1883,
        clientId: 'clientId-nWJplWkEtYsd',
        protocol: 'tcp',
      }
    },
  );
  
  await app.listen(() => {
    Logger.log('Microservice is listining...');
  });
}
bootstrap();
