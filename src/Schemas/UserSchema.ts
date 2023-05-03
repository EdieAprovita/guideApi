import { Schema, model } from "mongoose";
import { IUser, Role } from "../Types/Types";

const UserSchema = new Schema<IUser>({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: [Role.USER, Role.ADMIN, Role.PROFESSIONAL],
		default: Role.USER,
	},
	photo: {
		type: String,
	},
	timestamps: {
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
});

export const UserModel = model<IUser>("User", UserSchema);
