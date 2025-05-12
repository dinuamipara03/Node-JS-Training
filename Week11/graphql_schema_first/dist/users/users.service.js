"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    users = [
        { id: '1', name: 'Tony', email: 'tony@example.com' },
        { id: '2', name: 'Jony', email: 'jony@example.com' },
        { id: '3', name: 'Mony', email: 'mony@example.com' },
        { id: '4', name: 'Jelly', email: 'jelly@example.com' },
        { id: '5', name: 'John', email: 'john@example.com' },
        { id: '6', name: 'Ram', email: 'Ram@example.com' },
        { id: '7', name: 'Ranni', email: 'ranni@example.com' },
        { id: '8', name: 'Roy', email: 'roy@example.com' },
        { id: '9', name: 'Tony', email: 'tonyy@example.com' },
    ];
    async findById(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    }
    async findAll() {
        return this.users;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map