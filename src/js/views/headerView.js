class HeaderView {
  _parentElement = document.querySelector(".header");

  toggle() {
    this._parentElement.classList.toggle("nav-open");
  }
}

export default new HeaderView();
