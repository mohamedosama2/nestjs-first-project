import { IsNotEmpty, IsString } from 'class-validator';

export class typesDto {
  @IsString()
  @IsNotEmpty()
  nameAr: string;

  @IsString()
  @IsNotEmpty()
  nameEn: string;
}
