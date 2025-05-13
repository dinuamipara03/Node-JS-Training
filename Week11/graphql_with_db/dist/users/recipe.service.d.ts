import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
export declare class RecipeService {
    private recipeRepository;
    constructor(recipeRepository: Repository<Recipe>);
    findAll(): Promise<Recipe[]>;
    findOne(id: number): Promise<Recipe | null>;
    create(createRecipeInput: CreateRecipeInput): Promise<Recipe>;
    update(id: number, updateRecipeInput: UpdateRecipeInput): Promise<Recipe>;
    remove(id: number): Promise<void>;
}
