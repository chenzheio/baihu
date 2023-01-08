import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import next from 'next';
import { AppController } from './app.controller';

@Module({
  imports: [
    RenderModule.forRootAsync(
      next({
        dev: process.env.NODE_ENV !== 'production',
        conf: { useFileSystemPublicRoutes: false }
      })
    )
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
