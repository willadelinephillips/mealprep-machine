import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipeService {

  constructor(@InjectRepository(Recipe) private readonly recipeRepository: Repository<Recipe>) {}

  create(createRecipeDto: CreateRecipeDto) {
    return this.recipeRepository.save(createRecipeDto);
  }

  findAll() {
    return this.recipeRepository.find();
  }

  findOne(id: number) {
    return this.recipeRepository.findOne(id);
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return this.recipeRepository.update(id, updateRecipeDto);
  }

  remove(id: number) {
    return this.recipeRepository.delete(id);
  }
}
