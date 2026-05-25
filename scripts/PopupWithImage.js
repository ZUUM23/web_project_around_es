import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(selectorPopup, image, subTitle) {
    super(selectorPopup);
    this._image = image;
    this._subtitle = subTitle;
  }
  openModal(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._subtitle.textContent = name;
    super.openModal();
  }
}
