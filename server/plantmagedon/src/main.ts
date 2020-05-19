import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { AppModule } from './app.module';
import * as helmet from 'helmet'

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./environment/ssl/server.key'),
    cert: fs.readFileSync('./environment/ssl/server.cert')
  }

  const app = await NestFactory.create(AppModule, {httpsOptions});

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();


