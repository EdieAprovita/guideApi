import { Schema, model } from "mongoose";
import { IMedic, IReview } from "../Types/Types";

const MedicSchema = new Schema<IMedic>({
	doctorName: {
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
	speciality: {
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
			},
			instagram: {
				type: String,
			},
			email: {
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

export const Medic = model<IMedic>("Medic", MedicSchema);
