"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const recipe_entity_1 = require("./entities/recipe.entity");
const recipe_service_1 = require("./recipe.service");
const create_recipe_input_1 = require("./dto/create-recipe.input");
const update_recipe_input_1 = require("./dto/update-recipe.input");
let RecipeResolver = class RecipeResolver {
    recipeService;
    constructor(recipeService) {
        this.recipeService = recipeService;
    }
    recipes() {
        return this.recipeService.findAll();
    }
    recipe(id) {
        return this.recipeService.findOne(id);
    }
    createRecipe(createRecipeData) {
        return this.recipeService.create(createRecipeData);
    }
    updateRecipe(id, updateRecipeData) {
        return this.recipeService.update(id, updateRecipeData);
    }
    deleteRecipe(id) {
        return this.recipeService.remove(id).then(() => true);
    }
};
exports.RecipeResolver = RecipeResolver;
__decorate([
    (0, graphql_1.Query)(() => [recipe_entity_1.Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "recipes", null);
__decorate([
    (0, graphql_1.Query)(() => recipe_entity_1.Recipe, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "recipe", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_entity_1.Recipe),
    __param(0, (0, graphql_1.Args)('createRecipeData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_recipe_input_1.CreateRecipeInput]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "createRecipe", null);
__decorate([
    (0, graphql_1.Mutation)(() => recipe_entity_1.Recipe),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('updateRecipeData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_recipe_input_1.UpdateRecipeInput]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "updateRecipe", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RecipeResolver.prototype, "deleteRecipe", null);
exports.RecipeResolver = RecipeResolver = __decorate([
    (0, graphql_1.Resolver)(() => recipe_entity_1.Recipe),
    __metadata("design:paramtypes", [recipe_service_1.RecipeService])
], RecipeResolver);
//# sourceMappingURL=recipe.resolver.js.map