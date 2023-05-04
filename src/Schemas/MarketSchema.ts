import { Schema, model } from "mongoose";
import { IMarket, IReview, TypeMarket } from "../Types/Types";

const MarketSchema = new Schema<IMarket>({
	marketName: {
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
		required: true,
	},
	typeMarket: {
		type: String,
		enum: [TypeMarket.STREETMARKET, TypeMarket.SUPERMARKET],
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

export const MarketModel = model<IMarket>("Market", MarketSchema);
