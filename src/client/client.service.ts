import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './client.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ClientService {
    constructor(
        @InjectModel(Client.name) private readonly clientModel: Model<Client>
    ) {}

    async findAll(): Promise<Client[]> {
        return await this.clientModel.find().exec();
    }

    async findOne(id: string): Promise<Client> {
        return await this.clientModel.findById(id).exec();
    }

    async findByEmail(email: string): Promise<Client> {
        const filter = { email: email };
        return await this.clientModel.findOne(filter).exec();
    }

    async create(client: Client): Promise<Client> {
        const hash = await bcrypt.hash(client.password, 10);
        Logger.log(hash);
        return await new this.clientModel({
            ...client, password: hash
        }).save();
    }

    async validatePassword(email: string, password: string): Promise<boolean> {
        const filter = { email: email };
        const client: Client = await this.clientModel.findOne(filter).exec();
        Logger
        return await bcrypt.compareSync(password, client.password);
    }

    async update(id: string, client: Client): Promise<Client> {
        return await this.clientModel.findByIdAndUpdate(id, client).exec();
    }

    async delete(id: string): Promise<Client> {
        return await this.clientModel.findByIdAndDelete(id).exec();
    }
}
