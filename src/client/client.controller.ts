import { Body, Controller, Delete, Get, Logger, Param, Post, Put, Req } from '@nestjs/common';
import { Client } from './client.model';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
    constructor(private readonly service: ClientService) {}

    @Get()
    async findAll() {
        Logger.log("prueba");

        return await this.service.findAll();
    }

    @Get("/id/:id")
    async findByUser(@Param('id') id: string) {
        Logger.log(id);
        return await this.service.findOne(id);
    }
    @Get(':email')
    async findByEmail(@Param('email') email: string) {
        Logger.log(email);
        return await this.service.findByEmail(email);
    }

    @Post()
    async create(@Body() model: Client) {
        return await this.service.create(model);
    }

    @Post('/validate')
    async validatePassword(@Body() request: any) {
        return await this.service.validatePassword(request.email, request.pass);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() model: Client) {
        return await this.service.update(id, model);
    }
    @Delete(':id')
    async delete (@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
