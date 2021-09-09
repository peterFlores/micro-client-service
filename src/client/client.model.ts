import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ClientDocument = Client & Document;
@Schema()
export class Client {

    @Prop({ required: true })
    first_name: string;

    @Prop()
    second_name: string;
    
    @Prop({ required: true })
    last_name: string;
    
    @Prop()
    slast_name: string;
    
    @Prop({ required: true })
    phone: string;

    @Prop({ required: true, index: true, lowercase: true, unique: true })
    email: string;

    @Prop({ required: true, index: true, maxlength: 13 })
    dpi: string;

    @Prop()
    address: string;

    @Prop({ required: true })
    client_type: string;

    @Prop()
    affiliate: string;

    

    @Prop({ required: true })
    password: string;
}
export const ClientSchema = SchemaFactory.createForClass(Client);
