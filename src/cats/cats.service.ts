import { Injectable } from '@nestjs/common';
import { CatsRepositary } from './cats.repository';
import { CreateCatDto, FilterQueryOptionsCat } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { FilterQuery, PaginateResult, CreateQuery } from 'mongoose';
import { CatDocument } from './entities/cat.entity';
@Injectable()
export class CatsService {
  constructor(private readonly catsRepsiatry: CatsRepositary) {}

  async create(createCatDto: CreateCatDto): Promise<CreateQuery<CatDocument>> {
    return await this.catsRepsiatry.create(createCatDto);
    // return 'This action adds a new cat';
  }

  // findAll() {
  //   return `This action returns all cats`;
  // }
  async findAll(
    filterQueryOptionsCat: FilterQueryOptionsCat,
  ): Promise<PaginateResult<CatDocument> | CatDocument[]> {
    const cats = await this.catsRepsiatry.findAllWithPaginationOption(
      filterQueryOptionsCat as FilterQueryOptionsCat,
      ['name'],
    );
    return cats;
  }

  async findOne(filter: FilterQuery<CatDocument>): Promise<CatDocument> {
    const cat = await this.catsRepsiatry.findOne(
      filter as FilterQuery<CatDocument>,
    );
    return cat;
    // return `This action returns a #${id} cat`;
  }

  async update(
    filter: FilterQuery<CatDocument>,
    updateCatDto: UpdateCatDto,
  ): Promise<CatDocument> {
    const updated = await this.catsRepsiatry.updateOne(filter, updateCatDto);
    return updated;
  }

  async remove(id: FilterQuery<CatDocument>): Promise<void> {
    await this.catsRepsiatry.deleteOne(id);
    // return `This action removes a #${id} cat`;
  }
}
