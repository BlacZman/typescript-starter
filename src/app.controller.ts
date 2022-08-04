import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PostMyYeet } from './dto/body.dto';
import { GetDog } from './dto/query.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Post()
    postMyYeet(@Body() payload: PostMyYeet): string {
        return this.appService.postMyYeet(payload);
    }

    @Get('dog')
    getDog(@Query() query: GetDog): string {
        if (query) {
            return this.appService.getDog(query.id);
        } else {
            return this.appService.getDogs();
        }
    }
}
