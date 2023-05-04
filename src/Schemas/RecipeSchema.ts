import { Schema, model } from "mongoose";
import { Budget, Difficulty, IRecipe, IReview, TypeDish } from "../Types/Types";

const RecipeSchema = new Schema<IRecipe>({
	recipeName: {
		type: String,
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	instructions: {
		type: String,
		required: true,
	},
	ingredients: {
		type: String,
		required: true,
	},
	typeDish: {
		type: String,
		enum: [
			TypeDish.BREAKFAST,
			TypeDish.LUNCH,
			TypeDish.DINNER,
			TypeDish.SNACK,
			TypeDish.DESSERT,
		],
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	cookingTime: {
		type: Number,
		required: true,
	},
	difficulty: {
		type: String,
		enum: [Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD],
		required: true,
	},
	reviews: [] as IReview[],
	rating: {
		type: Number,
		default: 0,
		required: true,
	},
	numReviews: {
		type: Number,
		default: 0,
		required: true,
	},
	budget: {
		type: String,
		enum: [Budget.LOW, Budget.MEDIUM, Budget.HIGH],
		required: true,
	},
	timestamps: {
		createdAt: {
			type: Date,
			required: true,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			required: true,
			default: Date.now,
		},
	},
});

export const RecipeModel = model<IRecipe>("Recipe", RecipeSchema);
