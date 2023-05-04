import { Types } from "mongoose";

export enum Role {
	ADMIN = "ADMIN",
	USER = "USER",
	PROFESSIONAL = "PROFESSIONAL",
}

export enum Budget {
	LOW = "LOW",
	MEDIUM = "MEDIUM",
	HIGH = "HIGH",
}

export enum TypeDish {
	BREAKFAST = "BREAKFAST",
	LUNCH = "LUNCH",
	DINNER = "DINNER",
	SNACK = "SNACK",
	DESSERT = "DESSERT",
}

export enum TypePlace {
	RESTAURANT = "RESTAURANT",
	STREETFOOD = "STREETFOOD",
}

export enum TypeMarket {
	SUPERMARKET = "SUPERMARKET",
	STREETMARKET = "STREETMARKET",
}

export enum Difficulty {
	EASY = "EASY",
	MEDIUM = "MEDIUM",
	HARD = "HARD",
}

export interface IUser {
	username: string;
	password: string;
	email: string;
	role: Role;
	photo: string;
	timestamps: {
		createdAt: Date;
		updatedAt: Date;
	};
}

export interface IReview {
	_id?: string;
	username: string;
	rating: number;
	comment: string;
	user: Types.ObjectId;
	timestamps: {
		createdAt: Date;
		updatedAt: Date;
	};
}

export interface IBusiness {
	_id?: string;
	namePlace: string;
	author: Types.ObjectId;
	address: string;
	image: string;
	contact: [
		{
			phone: number;
			facebook?: string;
			instagram?: string;
			email?: string;
		}
	];
	budget: Budget;
	reviews: IReview[];
	rating: number;
	timestamps: {
		createdAt: Date;
		updatedAt: Date;
	};
}

export interface IMedic {
	_id?: string;
	doctorName: string;
	author: Types.ObjectId;
	address: string;
	image: string;
	speciality: string;
	contact: [
		{
			phone: string;
			facebook?: string;
			instagram?: string;
			email: string;
		}
	];
	reviews: IReview[];
	rating: number;
	numReviews: number;
	timestamps: {
		createdAt: Date;
		updatedAt: Date;
	};
}

export interface IMarket {
	_id?: string;
	marketName: string;
	author: Types.ObjectId;
	address: string;
	image: string;
	typeMarket: string;
	reviews: [IReview];
	rating: number;
	numReviews: number;
	timestamps: {
		createdAt: Date;
		updatedAt: Date;
	};
}

export interface IProfession {
	_id?: string;
	professionName: string;
	author: Types.ObjectId;
	specialty: string;
	contact: [
		{
			phone: number;
			email: string;
			facebook?: string;
			instagram?: string;
		}
	];
	reviews: [IReview];
	rating: number;
	numReviews: number;
	timestamps: {
		createdAt: Date;
		updatedAt: Date;
	};
}

export interface IRecipe {
	_id?: string;
	recipeName: string;
	author: Types.ObjectId;
	description: string;
	instructions: string;
	ingredients: string;
	typeDish: TypeDish;
	image: string;
	cookingTime: number;
	difficulty: Difficulty;
	reviews: [IReview];
	rating: number;
	numReviews: number;
	budget: string;
	timestamps: {
		createdAt: Date;
		updatedAt: Date;
	};
}

export interface IRestaurant {
	_id?: string;
	restaurantName: string;
	author: Types.ObjectId;
	typePlace: TypePlace;
	address: string;
	image: string;
	budget: Budget;
	contact: [
		{
			phone: number;
			facebook: string;
			instagram: string;
		}
	];
	reviews: [IReview];
	rating: number;
	numReviews: number;
	timestamps: {
		createdAt: Date;
		updatedAt: Date;
	};
}
