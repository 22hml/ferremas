import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response, Request } from 'express';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
    UsersService: UsersService;

    constructor(private usersService: UsersService){}

    @Post('/getAll')
    @UseGuards(JwtAuthGuard)
    async getAllUsers(@Req() request: Request, @Res() response: Response):Promise<any>{
        try{
            const result = await this.usersService.getAllUser();
            return response.status(200).json({
                status: 'Ok!',
                message: 'Succesfuly fetch data!',
                result: result
            })
        }catch(error){
            return response.status(500).json({
                status: 'Ok!',
                message: 'Internal Server Error!'
            })
        }
    }
}
