class Storage {
  #items;

  constructor({ items }) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(deleteItem) {
    const indexToRemove = this.#items.indexOf(deleteItem);
    if (indexToRemove !== -1) {
      this.#items.splice(indexToRemove, 1);
    }
  }
}

// Перевірка
const storage = new Storage({ items: ["Nanitoids", "Prolonger", "Antigravitator"] });
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
