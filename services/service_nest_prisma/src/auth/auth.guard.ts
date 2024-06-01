import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


export class JwtAuthGuard extends AuthGuard('jwt'){

    canActivate(context: ExecutionContext){
        return super.canActivate(context)
    }

    handleRequest(error,user,info) {
        if(error || !user){
         throw error || new UnauthorizedException();
        }
        return user
    }
}