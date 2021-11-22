class SubmitBtnView {
  _parentElement = document.querySelector(".btnContainer");
  _data;

  render() {
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _generateMarkup() {
    return `
        <button class="btn btn-submit">Submit</button>
        `;
  }

  submitHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-submit");
      if (!btn) return;
      handler();
    });
  }
}

export default new SubmitBtnView();
