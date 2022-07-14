import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { Breed, BreedDocument } from 'src/schemas/breed.schema';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

@Injectable()
export class BreedsService {
  constructor(@InjectModel(Breed.name) private breedModel: Model<BreedDocument>) {}

  async create(CreateBreedDto: CreateBreedDto): Promise<Breed> {
    return new this.breedModel(CreateBreedDto).save();
  }

  findAll() {
    return this.breedModel.find();
  }

  findOne(name: string) {
    return this.breedModel.findOne({name});
  }

  update(_id: string, updateBreedDto: UpdateBreedDto) {
    return this.breedModel.updateOne({_id}, {$set: {...updateBreedDto}});
  }

  remove(id: string) {
    return this.breedModel.deleteOne({_id : id});
  }
}
