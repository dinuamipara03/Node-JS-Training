import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeService } from './recipe.service';
import { RecipeResolver } from './recipe.resolver';
import { Recipe } from './entities/recipe.entity'; // Ensure this is the correct path

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])], // Register the Recipe entity
  providers: [RecipeService, RecipeResolver],
  exports: [RecipeService], // Export if needed in other modules
})
export class RecipeModule {}