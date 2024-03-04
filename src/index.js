// starred.js

class Stared {
  constructor() {
    this.items = [];
  }

  add(item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
      return true;
    }
    return false;
  }

  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  getAll() {
    return this.items;
  }

  clear() {
    this.items = [];
  }
}

module.exports = Stared;
