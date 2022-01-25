import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class types {
  @Prop(String)
  nameAr: string;

  @Prop(String)
  nameEn: string;
}
export const typesSchema = SchemaFactory.createForClass(types);
