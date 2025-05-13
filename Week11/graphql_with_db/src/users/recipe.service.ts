import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) {}

  findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  async findOne(id: number): Promise<Recipe | null> {
    const recipe = await this.recipeRepository.findOne({ where: { id } });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return this.recipeRepository.findOneBy({ id });
  }

  create(createRecipeInput: CreateRecipeInput): Promise<Recipe> {
    const newRecipe = this.recipeRepository.create(createRecipeInput);
    return this.recipeRepository.save(newRecipe);
  }

  async update(id: number, updateRecipeInput: UpdateRecipeInput): Promise<Recipe> {
    const recipe = await this.recipeRepository.preload({
      id: id,
      ...updateRecipeInput,
    });
    if (!recipe) {
      throw new Error('Recipe not found');
    }
    return this.recipeRepository.save(recipe);
  }

  async remove(id: number): Promise<void> {
    const recipe = await this.recipeRepository.findOne({ where: { id } });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    await this.recipeRepository.delete(id);
  }
}