export default class Section {
  constructor(data, container) {
    this._item = data.item;
    this._renderer = data.renderer;
    this._container = document.querySelector(".content");
  }

  addItem(elements) {
    this._container.append(elements);
  }
  containerItem() {
    this._item.forEach((items) => {
      this._elements = this._renderer(items);
      this.addItem(elements);
    });
  }
}
