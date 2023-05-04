import { Schema, model } from "mongoose";
import { IRestaurant, IReview, TypePlace } from "../Types/Types";

const RestaurantSchema = new Schema<IRestaurant>({
	restaurantName: {
		type: String,
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	typePlace: {
		type: String,
		enum: [TypePlace.RESTAURANT, TypePlace.STREETFOOD],
	},
	address: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	contact: [
		{
			phone: {
				type: Number,
				required: true,
			},
			facebook: {
				type: String,
				required: true,
			},
			instagram: {
				type: String,
				required: true,
			},
		},
	],
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

export const RestaurantModel = model<IRestaurant>("Restaurant", RestaurantSchema);
