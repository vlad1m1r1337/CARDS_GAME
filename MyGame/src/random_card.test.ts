//-----------------------------------------------------------------------------------------------------
//const { it } = require("@jest/globals");
import { it } from "@jest/globals";
import { randomCards } from "./random_card";

it('should outp 6', () => {
	// Подготовка
	const expected = 6;

	// Действие
	const is = randomCards(3).length;

	if (expected !== is){
		console.log(`Expected ${expected}, but got ${is}`);
	}
	else
		console.log("First test is successful");
})

it('should outp 9', () => {
	// Подготовка
	const expected = 12;

	// Действие
	const is = randomCards(6).length;

	if (expected !== is){
		console.log(`Expected ${expected}, but got ${is}`);
	}
	else
		console.log("First test is successful");
})

it('should outp 9', () => {
	// Подготовка
	const expected = 18;

	// Действие
	const is = randomCards(9).length;

	if (expected !== is){
		console.log(`Expected ${expected}, but got ${is}`);
	}
	else
		console.log("First test is successful");
})