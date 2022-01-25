import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Cat, CatSchema } from './entities/cat.entity';
import { CatsRepositary } from './cats.repository';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [CatsController],
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsService, CatsRepositary],
  exports: [CatsService, CatsRepositary],
})
export class CatsModule {}
