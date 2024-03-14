class StringBuilder {
  #value;

  constructor({ value }) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  padEnd(end) {
    this.#value += end;
    return this;
  }

  padStart(start) {
    this.#value = start + this.#value;
    return this;
  }

  padBoth(both) {
    this.#value = both + this.#value + both;
    return this;
  }
}

// Перевірка
const builder = new StringBuilder({ value: "." });
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
