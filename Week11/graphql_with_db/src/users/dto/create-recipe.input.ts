import { Optional } from '@nestjs/common';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
@Field()
title:string;

@Field()
@Optional()
description:string;
}
