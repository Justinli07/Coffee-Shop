class TakenTotalView {
  _parentElement = document.querySelector(".takenTotal");
  _data;

  render(data) {
    this._data = data;
    this._parentElement.innerHTML = data;
  }
}

export default new TakenTotalView();
