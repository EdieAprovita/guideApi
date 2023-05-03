import { Schema, model, Types } from "mongoose";
import { IBusiness, Budget, TypeDish, TypePlace, Difficulty } from "../Types/Types";

const BusinessSchema = new Schema<IBusiness>({
	namePlace: {
		type: String,
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
	contact: [
		{
			phone: {
				type: Number,
				required: true,
			},
			facebook: {
				type: String,
			},
			instagram: {
				type: String,
			},
		},
	],
	budget: {
		type: String,
		enum: [Budget.LOW, Budget.MEDIUM, Budget.HIGH],
		required: true,
	},
	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
	],
	rating: {
		type: Number,
		default: 0,
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

export const BusinessModel = model<IBusiness>("Business", BusinessSchema);
