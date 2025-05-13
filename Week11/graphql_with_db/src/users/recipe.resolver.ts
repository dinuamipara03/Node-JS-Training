import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Recipe } from './entities/recipe.entity';
import { RecipeService } from './recipe.service';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private readonly recipeService: RecipeService) {}

  @Query(() => [Recipe])
  recipes() {
    return this.recipeService.findAll();
  }

  @Query(() => Recipe, { nullable: true })
  recipe(@Args('id', { type: () => ID }) id: number) {
    return this.recipeService.findOne(id);
  }

  @Mutation(() => Recipe)
  createRecipe(@Args('createRecipeData') createRecipeData: CreateRecipeInput) {
    return this.recipeService.create(createRecipeData);
  }

  @Mutation(() => Recipe)
  updateRecipe(@Args('id') id: number, @Args('updateRecipeData') updateRecipeData: UpdateRecipeInput) {
    return this.recipeService.update(id, updateRecipeData);
  }

  @Mutation(() => Boolean)
  deleteRecipe(@Args('id', { type: () => ID }) id: number) {
    return this.recipeService.remove(id).then(() => true);
  }
}