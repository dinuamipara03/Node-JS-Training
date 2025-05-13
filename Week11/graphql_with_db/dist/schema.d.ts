export interface CreateRecipeInput {
    title: string;
    description: string;
}
export interface UpdateRecipeInput {
    title?: Nullable<string>;
    description?: Nullable<string>;
}
export interface Recipe {
    id: string;
    title: string;
    description: string;
}
export interface IQuery {
    recipes(): Recipe[] | Promise<Recipe[]>;
    recipe(id: string): Nullable<Recipe> | Promise<Nullable<Recipe>>;
}
export interface IMutation {
    createRecipe(createRecipeData: CreateRecipeInput): Recipe | Promise<Recipe>;
    updateRecipe(id: number, updateRecipeData: UpdateRecipeInput): Recipe | Promise<Recipe>;
    deleteRecipe(id: string): boolean | Promise<boolean>;
}
type Nullable<T> = T | null;
export {};
