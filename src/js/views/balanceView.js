class BalanceView {
  _parentElement = document.querySelector(".balance");
  _data;

  render(data) {
    this._data = data;
    this._parentElement.innerHTML = data;
  }
}

export default new BalanceView();
