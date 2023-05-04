import { Schema, model } from "mongoose";
import { IProfession, IReview } from "../Types/Types";

const ProfessionSchema = new Schema<IProfession>({
	professionName: {
		type: String,
		required: true,
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	specialty: {
		type: String,
		required: true,
	},
	contact: [
		{
			phone: {
				type: Number,
				required: true,
			},
			email: {
				type: String,
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

export const ProfessionModel = model<IProfession>("Profession", ProfessionSchema);
