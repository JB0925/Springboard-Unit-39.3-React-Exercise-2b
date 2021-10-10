const choice = items => {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
};


const remove = (items, item) => {
    const idx = items.indexOf(item);
    if (idx === -1) return undefined;
    items.splice(idx, 1);
    return items;
}

export { choice, remove }