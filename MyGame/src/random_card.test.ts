//-----------------------------------------------------------------------------------------------------

import { randomCards } from "./random_card";
{
	// Подготовка
	const expected = 6;

	// Действие
	const is = randomCards(3).length;

	if (expected !== is){
		console.log(`Expected ${expected}, but got ${is}`);
	}
	else
		console.log("First test is successful");
}
{
	// Подготовка
	const expected = 12;

	// Действие
	const is = randomCards(6).length;

	if (expected !== is){
		console.log(`Expected ${expected}, but got ${is}`);
	}
	else
		console.log("Second test is successful");
}
{
	// Подготовка
	const expected = 36;

	// Действие
	const is = randomCards(18).length;

	if (expected !== is){
		console.log(`Expected ${expected}, but got ${is}`);
	}
	else
		console.log("Third test is successful");
}

//-----------------------------------------------------------------------------------------------------

// Не получилось подключить assert

// import assert from 	;
// import { randomCards } from "./random_card";

// {
//     // Подготовка
//     const expected = 6;

//     // Действие
//     const is = randomCards(3).length;

//     // Сравнение
//     assert.strictEqual(expected, is, `Expected ${expected}, but got ${is}`);
// }
