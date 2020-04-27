import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
	imports: [TypeOrmModule.forRoot(), CoursesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}