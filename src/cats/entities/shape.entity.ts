import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class shape {
  @Prop(Number)
  qunatity: number;

  @Prop(String)
  color: string;
}
export const shapeSchema = SchemaFactory.createForClass(shape);
