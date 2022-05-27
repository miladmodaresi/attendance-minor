import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { attendance } from './attendance/attendance.entity';
import { AttendanceModule } from './attendance/attendance.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AttendanceModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'work_hours',
      entities: [attendance],
      synchronize: true,
    }),
    UserModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
