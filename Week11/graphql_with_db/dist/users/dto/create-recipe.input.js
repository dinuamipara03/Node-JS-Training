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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRecipeInput = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
let CreateRecipeInput = class CreateRecipeInput {
    title;
    description;
};
exports.CreateRecipeInput = CreateRecipeInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateRecipeInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], CreateRecipeInput.prototype, "description", void 0);
exports.CreateRecipeInput = CreateRecipeInput = __decorate([
    (0, graphql_1.InputType)()
], CreateRecipeInput);
//# sourceMappingURL=create-recipe.input.js.map