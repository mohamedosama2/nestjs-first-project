import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  Query,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/decorators/public.decorator';
import { ApiPaginatedResponse } from 'src/utils/pagination/apiPaginatedResponse';
import { CatsService } from './cats.service';
import { CreateCatDto, FilterQueryOptionsCat } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat, CatDocument } from './entities/cat.entity';
import { PaginateResult, FilterQuery, CreateQuery } from 'mongoose';
import ParamsWithId from 'src/utils/paramsWithId.dto';

@ApiBearerAuth()
@ApiTags('CATS')
@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    @Inject(REQUEST) private readonly req: Record<string, unknown>,
  ) {}

  @Public()
  @Post()
  async create(
    @Body() createCatDto: CreateCatDto,
  ): Promise<CreateQuery<CatDocument>> {
    return await this.catsService.create(createCatDto as CreateCatDto);
  }

  @Public()
  @Get()
  @ApiPaginatedResponse(Cat)
  async findAll(
    @Query() filterQueryOptionsCat: FilterQueryOptionsCat,
  ): Promise<PaginateResult<CatDocument> | CatDocument[]> {
    return this.catsService.findAll(
      filterQueryOptionsCat as FilterQueryOptionsCat,
    );
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: ParamsWithId) {
    return this.catsService.findOne({ _id: id });
  }

  @Public()
  @Patch(':id')
  async update(
    @Param() { id }: ParamsWithId,
    @Body() updateCatDto: UpdateCatDto,
  ): Promise<CatDocument> {
    return await this.catsService.update(
      { _id: id } as FilterQuery<CatDocument>,
      updateCatDto,
    );
  }

  @Public()
  @Delete(':id')
  async remove(@Param('id') id: ParamsWithId): Promise<void> {
    return await this.catsService.remove(id);
  }
}
