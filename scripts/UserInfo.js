export default class UserInfo {
  constructor({ nameSelector, workSelector }) {
    this._usuario = document.querySelector(nameSelector);
    this._workUser = document.querySelector(workSelector);
  }
  getUserInfo() {
    return {
      name: this._usuario.textContent,
      workUser: this._workUser.textContent,
    };
  }
  setUserInfo(item) {
    this._usuario.textContent = item.name;
    this._workUser.textContent = item.workUser;
  }
}
