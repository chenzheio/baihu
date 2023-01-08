import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Request } from 'express';
import { AppModule } from './app.module';

class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request: Request = ctx.getRequest();

    response
      .render("customError", {
        timestamp: new Date().toISOString(),
        path: request.protocol + "://" + request.hostname + request.url,
        ...exception.response
      })
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
