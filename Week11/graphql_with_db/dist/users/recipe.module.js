"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const recipe_service_1 = require("./recipe.service");
const recipe_resolver_1 = require("./recipe.resolver");
const recipe_entity_1 = require("./entities/recipe.entity");
let RecipeModule = class RecipeModule {
};
exports.RecipeModule = RecipeModule;
exports.RecipeModule = RecipeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([recipe_entity_1.Recipe])],
        providers: [recipe_service_1.RecipeService, recipe_resolver_1.RecipeResolver],
        exports: [recipe_service_1.RecipeService],
    })
], RecipeModule);
//# sourceMappingURL=recipe.module.js.map