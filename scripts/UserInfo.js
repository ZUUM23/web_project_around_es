export default class UserInfo {
  constructor({ nameSelector, workSelector, avatarSelector }) {
    this._usuario = document.querySelector(nameSelector);
    this._workUser = document.querySelector(workSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      name: this._usuario.textContent,
      workUser: this._workUser.textContent,
      avatar: this._avatarSelector.url,
    };
  }
  setUserInfo(item) {
    this._usuario.textContent = item.name;
    this._workUser.textContent = item.workUser;
    this._avatarSelector.url = item.avatar;
  }
}
