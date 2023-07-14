import {assert} from "assert";

//const assert = require("assert").strict;
import { randomCards } from "./random_card";
//const { randomCards } = require("./random_card");

{
	// Подготовка
	const expected = 6;

	// Действие
	const is = randomCards.length;

	//Сверка
	assert.equal(is, expected);
}