import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './courses.entity';

@Injectable()
export class CoursesService {
	constructor(
		@InjectRepository(Course) private courseRepository: Repository<Course>,
	) {}

	getCourses(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				resolve(this.courseRepository.find());
			} catch (e) {
				reject(new HttpException("Couldn't do course manipulation", 500));
			}
		});
	}

	getCourse(courseId): Promise<any> {
		let id = Number(courseId);
		return new Promise((resolve, reject) => {
			const course = this.courseRepository.find({
				where: [{ id: id }],
			});

			if (!course) {
				reject(new HttpException('Course Not Found', 404));
			}

			resolve(course);
		});
	}

	addCourse(course): Promise<any> {
		return new Promise(resolve => {
			this.courseRepository.save(course);
			resolve(course);
		});
	}

	// deleteCourse(courseId): Promise<any> {
	// 	let id = Number(courseId);

	// 	return new Promise((resolve, reject) => {
	// 		let index = this.courses.findIndex(course => course.id === id);
	// 		if (index !== -1) {
	// 			reject(new HttpException('Course does not exist', 404));
	// 		}

	// 		this.courses.splice(index, 1);
	// 		resolve(this.courses);
	// 	});
	// }
}
