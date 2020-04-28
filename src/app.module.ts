import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.DB_HOST || 'localhost',
			port: 3306,
			username: process.env.DB_USER || 'bvipul',
			password: process.env.DB_PASS || 'root',
			database: process.env.DB || 'mynestplayground',
			entities: ['dist/**/*.entity.js'],
			synchronize: true,
		}),
		CoursesModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
