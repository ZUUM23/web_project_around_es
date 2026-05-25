export default class Section {
  constructor(container, { items, renderer }) {
    this._item = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  addItem(element) {
    this._container.append(element);
  }
  containerItem() {
    this._item.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
}
