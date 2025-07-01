// Yser types
export interface User {
	_id: string;
	email: string;
	username: string;
	profile: UserProfile;
	createdAt: string;
	updatedAt: string;
}

export interface UserProfile {
	age: number;
	location: { country: string; state: string; city: string };
	educationLevel: "elementary" | "middle" | "high" | "college";
	interests: string[];
	civicLevel: number;
	totalPoints: number;
	badges: Badge[];
}

// Quiz Types
export interface Quiz {
	_id: string;
	title: string;
	description: string;
	questions: Question[];
	difficulty: "beginner" | "intermediate" | "advanced";
	category: "rights" | "government" | "voting" | "budget";
	targetAge: {
		min: number;
		max: number;
	};
}

export interface Question {
	_id: string;
	text: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
	points: number;
}

// Budget Simulation Types
export interface BudgetSimulation {
	_id: string;
	title: string;
	totalBudget: number;
	categories: BudgetCategory[];
	scenario: string;
	difficulty: "easy" | "medium" | "hard";
}

export interface BudgetCategory {
	id: string;
	name: string;
	description: string;
	currentAmount: number;
	minAmount: number;
	maxAmount: number;
	impact: string;
}

// Gamification Types
export interface Badge {
	id: string;
	name: string;
	description: string;
	icon: string;
	earnedAt: Date;
}

export interface Achievement {
	id: string;
	title: string;
	description: string;
	points: number;
	category: string;
}

// API Response Types
export interface ApiResponse<T> {
	success: boolean;
	data: T;
	message: string;
}

export interface PaginatedResponse<T> {
	data: T[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		pages: number;
	};
}
