import wrapperView from "./wrapperView.js";
import headerView from "./headerView.js";

class MobileNavView {
  _parentElement = document.querySelector(".Container");

  openCloseHandler() {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-mobile-nav");
      if (!btn) return;
      wrapperView.toggle();
      headerView.toggle();
    });
  }
}

export default new MobileNavView();
