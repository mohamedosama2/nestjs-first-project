import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseAbstractRepository } from 'src/utils/base.abstract.repository';
import { Cat, CatDocument } from './entities/cat.entity';

@Injectable()
export class CatsRepositary extends BaseAbstractRepository<Cat> {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {
    super(catModel);
  }
}
