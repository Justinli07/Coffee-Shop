class ResetBtnView {
  _parentElement = document.querySelector(".btnContainer");
  _data;

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return `
          <button class="btn btn-reset">Reset</button>
          `;
  }

  resetHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-reset");
      if (!btn) return;
      handler();
    });
  }
}

export default new ResetBtnView();
