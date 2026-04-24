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
  setUserInfo({ name, workUser }) {
    this._usuario.textContent = name;
    this._workUser.textContent = workUser;
  }
}
