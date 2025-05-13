import { Recipe } from './entities/recipe.entity';
import { RecipeService } from './recipe.service';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
export declare class RecipeResolver {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    recipes(): Promise<Recipe[]>;
    recipe(id: number): Promise<Recipe | null>;
    createRecipe(createRecipeData: CreateRecipeInput): Promise<Recipe>;
    updateRecipe(id: number, updateRecipeData: UpdateRecipeInput): Promise<Recipe>;
    deleteRecipe(id: number): Promise<boolean>;
}
