import foods from "./foods";
import { choice, remove } from "./helpers";

const run = () => {
    const fruit = choice(foods);
    const updatedFoods = remove(foods, fruit);
    console.log(`I'd like one ${fruit}, please.`);
    console.log(`Here you go: ${fruit}.`);
    console.log(`Delicious! May I have another?`);
    console.log(`I'm sorry. We're all out. We have ${updatedFoods.length} fruits left.`);
};

run();