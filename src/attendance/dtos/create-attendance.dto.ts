import { IsDate, IsInt, IsString, Validator } from "class-validator";

export class CreateAttendanceDto  extends Validator{
    @IsString()
    start_at: String;
    @IsString()
    end_at:   String;
    @IsInt()
    date:     Date;
}