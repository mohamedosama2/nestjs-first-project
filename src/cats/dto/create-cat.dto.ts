//  @Prop({ type: String, required: true })
//  name: string;

import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';

import { typesDto } from './types.dto';
import { IsNonPrimitiveArray } from 'src/utils/custumValidatorsDecorators';
import { shapeDto } from './shape.dto';
import { IntersectionType } from '@nestjs/swagger';
import { PaginationParams } from 'src/utils/pagination/paginationParams.dto';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  number: number;

  @IsOptional()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  types: typesDto;

  @IsOptional()
  @ValidateNested({ each: true })
  @IsNonPrimitiveArray()
  @Type(() => shapeDto)
  shape: shapeDto[];
}
export class FilterQueryOptionsCat extends IntersectionType(
  CreateCatDto,
  PaginationParams,
) {}
