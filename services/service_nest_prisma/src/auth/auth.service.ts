import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma.service";
import { UsersService } from "src/users/users.service";
import { LoginDto } from "./dto/login-user.dto";
import * as bcrypt from 'bcrypt'
import { RegisterUsersDto } from "./dto/create-user.dto";
import { Users } from "src/users/users.model";

@Injectable()
export class AuthService {

    constructor(private readonly prismaService: PrismaService,
        private jwtService: JwtService,
        private readonly usersService: UsersService) { }

    async login(loginDto: LoginDto): Promise<any> {
        const { username, password } = loginDto;

        const users = await this.prismaService.users.findUnique({
            where: { username }
        })

        if (!users) {
            throw new NotFoundException('User not found')
        }

        const validatePassword = await bcrypt.compare(password, users.password)

        if (!validatePassword) {
            throw new NotFoundException('Invalid password')
        }

        return {
            token: this.jwtService.sign({ username })
        }
    }

    async register (registerDto: RegisterUsersDto): Promise<any>{

        const createUser = new Users()
        createUser.name = registerDto.name;
        createUser.email = registerDto.email;
        createUser.username = registerDto.username;
        createUser.password = await bcrypt.hash(registerDto.password, 10);
        createUser.createdAt = new Date();
    
        const user = await this.usersService.createUser(createUser);
    
        return {
          token: this.jwtService.sign({ username: user.username }),
        };
    }
}