import { Schema, model, Types } from "mongoose";
import { IReview } from "../Types/Types";

export const ReviewSchema = new Schema<IReview>({
	username: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
	},
	comment: {
		type: String,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
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

export const ReviewModel = model<IReview>("Review", ReviewSchema);
