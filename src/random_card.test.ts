import { it } from "@jest/globals";
import { randomCards } from "./random_card";
const assert = require("assert").strict;

it('should outp 6', () => {
	// Подготовка
	const expected = 6;

	// Действие
	const is = randomCards(3).length;

	assert.equal(expected, is);
})

it('should outp 12', () => {
	// Подготовка
	const expected = 12;

	// Действие
	const is = randomCards(6).length;

	assert.equal(expected, is);
})

it('should outp 18', () => {
	// Подготовка
	const expected = 18;

	// Действие
	const is = randomCards(9).length;

	assert.equal(expected, is);
})