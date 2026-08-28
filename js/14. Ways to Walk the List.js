const items = ["pen", "book", "bag"];

for (const item of items) {
    if (item === "book") break;
    console.log(item);
}

for (const [i, item] of items.entries()) {
    console.log(`${i}: ${item}`);
}

items.forEach((item, i) => console.log(i, item));
