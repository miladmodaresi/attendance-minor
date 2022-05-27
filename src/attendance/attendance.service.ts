import { Injectable } from '@nestjs/common';
import { AttendanceRepository } from './attendance.repository';

@Injectable()
export class AttendanceService {

  constructor(public attendanceRepo: AttendanceRepository) {
  }

  findOne(id: string) {
    return this.attendanceRepo.findOne(id);
  }

  findAll() {
    return this.attendanceRepo.findAll();
  }

  create(content: string) {
    return this.attendanceRepo.create(content);
  }
}
