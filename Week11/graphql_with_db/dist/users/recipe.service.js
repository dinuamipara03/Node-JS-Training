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
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const recipe_entity_1 = require("./entities/recipe.entity");
let RecipeService = class RecipeService {
    recipeRepository;
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    findAll() {
        return this.recipeRepository.find();
    }
    async findOne(id) {
        const recipe = await this.recipeRepository.findOne({ where: { id } });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with ID ${id} not found`);
        }
        return this.recipeRepository.findOneBy({ id });
    }
    create(createRecipeInput) {
        const newRecipe = this.recipeRepository.create(createRecipeInput);
        return this.recipeRepository.save(newRecipe);
    }
    async update(id, updateRecipeInput) {
        const recipe = await this.recipeRepository.preload({
            id: id,
            ...updateRecipeInput,
        });
        if (!recipe) {
            throw new Error('Recipe not found');
        }
        return this.recipeRepository.save(recipe);
    }
    async remove(id) {
        const recipe = await this.recipeRepository.findOne({ where: { id } });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with ID ${id} not found`);
        }
        await this.recipeRepository.delete(id);
    }
};
exports.RecipeService = RecipeService;
exports.RecipeService = RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recipe_entity_1.Recipe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecipeService);
//# sourceMappingURL=recipe.service.js.map