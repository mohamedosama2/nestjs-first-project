import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class shapeDto {
  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  @IsNotEmpty()
  qunatity: number;
}
