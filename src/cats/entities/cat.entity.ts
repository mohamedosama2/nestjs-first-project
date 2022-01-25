import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { shape, shapeSchema } from './shape.entity';
import { types, typesSchema } from './types.entity';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  @Prop({ type: String, required: true })
  name: string;

  @Prop(Number)
  number: number;

  @Prop(typesSchema)
  types: types; //add

  @Prop({
    type: [shapeSchema],
  })
  shape: shape[];
}

export const CatSchema = SchemaFactory.createForClass(Cat);
