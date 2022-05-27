import { Body, Controller, Get, Post } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dtos/create-attendance.dto';

@Controller('attendance')
export class AttendanceController {
    constructor(public attendanceService: AttendanceService) {

    }
    @Get()
    get() {

    }

    @Post()
    create(@Body() body: CreateAttendanceDto) {
        console.log(body);
    }
}
