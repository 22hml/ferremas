import { Length, IsString } from "class-validator";

export class LoginDto {

    @IsString()
    @Length(5,10)
    username: string;

    @IsString()
    @Length(6,12)
    password: string;
}