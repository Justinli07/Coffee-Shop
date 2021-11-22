class WrapperView {
  _parentElement = document.querySelector(".Wrapper");

  toggle() {
    this._parentElement.classList.toggle("nav-open");
  }
}

export default new WrapperView();
