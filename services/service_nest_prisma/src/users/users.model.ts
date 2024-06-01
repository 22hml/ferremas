import { Prisma } from "@prisma/client";


export class Users implements Prisma.UsersCreateInput{
    username: string;
    name: string;
    password: string;
    email: string;
    phone?: number;
    createdAt?: string | Date;
    lastLogin?: string | Date;
    isActive?: boolean;
}